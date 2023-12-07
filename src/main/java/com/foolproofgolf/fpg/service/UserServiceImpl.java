package com.foolproofgolf.fpg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foolproofgolf.fpg.db.UserRepository;
import com.foolproofgolf.fpg.models.User;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    // @Autowired
    // private User user;

    // public List<User> allUsers() {
    //     return userRepository.findAll();
    // }
    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    
    public User getUserByUsername(String username) {
        return userRepository.getUserByUsername(username);
    }
}
