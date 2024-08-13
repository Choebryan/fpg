package com.foolproofgolf.fpg.service;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foolproofgolf.fpg.db.UserRepository;
import com.foolproofgolf.fpg.model.User;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    };

    public Optional<User> getUserById(ObjectId id) {
        return userRepository.findById(id);
    };

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(ObjectId id) {
        userRepository.deleteById(id);
    }
}
