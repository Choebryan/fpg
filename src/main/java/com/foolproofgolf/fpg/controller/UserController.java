package com.foolproofgolf.fpg.controller;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foolproofgolf.fpg.model.User;
import com.foolproofgolf.fpg.service.UserService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    

    //Create a new user
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User createdUser = userService.createUser(user);
        return ResponseEntity.ok(createdUser);
    }

    //Get a user by id
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable ObjectId id) {
        Optional<User> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());

    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable ObjectId id, @Valid @RequestBody User user) {
        // Validate that the ID in the URL matches the ID in the body (if provided)
        if (user.getId() != null && !user.getId().equals(id)) {
            return ResponseEntity.badRequest().body(null); // IDs don't match
        }

        // Set the ID from the URL to ensure consistency
        user.setId(id);

        // Check if the user exists
        Optional<User> existingUser = userService.getUserById(id);
        if (existingUser.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        // Update the user
        User updatedUser = userService.updateUser(user);
        return ResponseEntity.ok(updatedUser);
    }

    //Delete a user by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable ObjectId id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
