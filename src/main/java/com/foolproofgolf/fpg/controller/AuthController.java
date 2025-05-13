package com.foolproofgolf.fpg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foolproofgolf.fpg.model.User;
import com.foolproofgolf.fpg.service.JwtService;
import com.foolproofgolf.fpg.service.UserService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/user")
public class AuthController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;

    // /api/user/google-success: Uses generateAccessToken and generateRefreshToken to issue tokens after Google login.
    // /api/user/current: Uses extractTokenFromCookies, validateToken, and getUserFromToken to verify the user.
    // /api/user/refresh: Uses extractRefreshTokenFromCookies, validateToken, and generateAccessToken to refresh tokens.
    // JwtAuthenticationFilter: Uses extractTokenFromCookies, validateToken, and getUserFromToken to set the security context for protected routes.

    @GetMapping("/current")
    public ResponseEntity<User> getCurrentUser(HttpServletRequest request) {
        String token = jwtService.extractTokenFromCookies(request);
        if (token == null || !jwtService.validateToken(token)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        User user = jwtService.getUserFromToken(token);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/google-success")
    public ResponseEntity<User> googleSuccess(@RequestBody GoogleCredential credential, HttpServletResponse response) {
        // TODO: Validate Google credential and fetch user details
        // For now, mock a user or find/create one via UserService
        User user = userService.findOrCreateUserByEmail("test@example.com");
        if (user == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        // Generate tokens
        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);

        // Set cookies
        Cookie accessCookie = new Cookie("accessToken", accessToken);
        accessCookie.setHttpOnly(true);
        accessCookie.setSecure(false); // Set to true in production with HTTPS
        accessCookie.setPath("/");
        accessCookie.setMaxAge(60 * 60); // 1 hour
        response.addCookie(accessCookie);

        Cookie refreshCookie = new Cookie("refreshToken", refreshToken);
        refreshCookie.setHttpOnly(true);
        refreshCookie.setSecure(false); // Set to true in production
        refreshCookie.setPath("/");
        refreshCookie.setMaxAge(60 * 60 * 24 * 7); // 7 days
        response.addCookie(refreshCookie);

        return ResponseEntity.ok(user);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(HttpServletResponse response) {
        // Clear cookies
        Cookie accessCookie = new Cookie("accessToken", null);
        accessCookie.setMaxAge(0);
        accessCookie.setPath("/");
        response.addCookie(accessCookie);

        Cookie refreshCookie = new Cookie("refreshToken", null);
        refreshCookie.setMaxAge(0);
        refreshCookie.setPath("/");
        response.addCookie(refreshCookie);

        return ResponseEntity.noContent().build();
    }

    @PostMapping("/refresh")
    public ResponseEntity<Void> refreshToken(HttpServletRequest request, HttpServletResponse response) {
        String refreshToken = jwtService.extractRefreshTokenFromCookies(request);
        if (refreshToken == null || !jwtService.validateToken(refreshToken)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        User user = jwtService.getUserFromToken(refreshToken);
        String newAccessToken = jwtService.generateAccessToken(user);

        Cookie accessCookie = new Cookie("accessToken", newAccessToken);
        accessCookie.setHttpOnly(true);
        accessCookie.setSecure(false); // Set to true in production
        accessCookie.setPath("/");
        accessCookie.setMaxAge(60 * 60); // 1 hour
        response.addCookie(accessCookie);

        return ResponseEntity.ok().build();
    }
}

class GoogleCredential {
    private String credential;

    public String getCredential() {
        return credential;
    }

    public void setCredential(String credential) {
        this.credential = credential;
    }
}