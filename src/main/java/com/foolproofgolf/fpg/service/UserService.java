package com.foolproofgolf.fpg.service;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;

import com.foolproofgolf.fpg.model.User;

public interface UserService {
    User createUser(User user);
    Optional<User> getUserById(ObjectId id);
    List<User> getAllUsers();
    User updateUser(User user);
    void deleteUser(ObjectId id); 
}
