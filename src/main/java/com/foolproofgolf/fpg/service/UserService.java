package com.foolproofgolf.fpg.service;

import com.foolproofgolf.fpg.models.User;

public interface UserService {
    public User saveUser(User user);

    public User getUserByUsername(String username);
}
