package com.foolproofgolf.fpg.utility;

import java.util.Collections;
import java.util.Date;
import java.util.Map;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
    private final SecretKey SECRET_KEY;

    @Value("${jwt.accessTokenValidity:900000}") // Default to 15 minutes
    private long ACCESS_TOKEN_VALIDITY;

    @Value("${jwt.refreshTokenValidity:604800000}") // Default to 7 days
    private long REFRESH_TOKEN_VALIDITY;

    // Constructor to initialize the SecretKey from the secret string
    public JwtUtil(@Value("${jwt.secret}") String secret) {
        this.SECRET_KEY = Keys.hmacShaKeyFor(secret.getBytes());
    }

    // Generate access token
    public String generateAccessToken(String googleId, String accountType) {
        Map<String, Object> claims = new java.util.HashMap<>();
        claims.put("googleId", googleId);
        claims.put("accountType", accountType);
        return createToken(claims, googleId, ACCESS_TOKEN_VALIDITY);
    }

    // Generate refresh token
    public String generateRefreshToken(String googleId) {
        return createToken(Collections.emptyMap(), googleId, REFRESH_TOKEN_VALIDITY);
    }

    private String createToken(Map<String, Object> claims, String subject, long validity) {
        return Jwts.builder()
                .claims().add(claims).and()
                .subject(subject)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + validity))
                .signWith(SECRET_KEY)
                .compact();
    }

    // Validate token
    public boolean validateToken(String token) {
        try {
            Jwts.parser()
                .verifyWith(SECRET_KEY)
                .build()
                .parseSignedClaims(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    // Extract claims
    public Claims getClaimsFromToken(String token) {
        return Jwts.parser()
                .verifyWith(SECRET_KEY)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    // Extract googleId from token
    public String getGoogleIdFromToken(String token) {
        return getClaimsFromToken(token).getSubject();
    }

    // Extract accountType from token
    public String getAccountTypeFromToken(String token) {
        return (String) getClaimsFromToken(token).get("accountType");
    }
}