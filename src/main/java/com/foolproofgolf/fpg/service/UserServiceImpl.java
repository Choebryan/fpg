package com.foolproofgolf.fpg.service;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.foolproofgolf.fpg.db.UserRepository;
import com.foolproofgolf.fpg.model.User;

/**
 * Implementation of the UserService interface for managing User-related operations.
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        if (user == null) {
            throw new IllegalArgumentException("User cannot be null");
        }
        return userRepository.save(user);
    }

    @Override
    public Optional<User> getUserById(ObjectId id) {
        if (id == null) {
            throw new IllegalArgumentException("ID cannot be null");
        }
        return userRepository.findById(id);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(User user) {
        if (user == null || user.getId() == null) {
            throw new IllegalArgumentException("User and ID cannot be null");
        }
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(ObjectId id) {
        if (id == null) {
            throw new IllegalArgumentException("ID cannot be null");
        }
        userRepository.deleteById(id);
    }

    @Override
    public User findOrCreateUserByEmail(String email, String googleId, String fullName) {
        if (!StringUtils.hasText(email) || !StringUtils.hasText(googleId) || !StringUtils.hasText(fullName)) {
            throw new IllegalArgumentException("Email, Google ID, and full name are required");
        }
        Optional<User> existingUser = userRepository.findByEmail(email);
        if (existingUser.isPresent()) {
            return existingUser.get();
        }
        User newUser = new User();
        newUser.setId(new ObjectId());
        newUser.setEmail(email);
        newUser.setGoogleId(googleId);
        newUser.setFullName(fullName);
        newUser.setAccountType("user");
        return userRepository.save(newUser);
    }
}