package com.foolproofgolf.fpg.service;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;

import com.foolproofgolf.fpg.model.User;

/**
 * Service interface for managing User-related operations.
 */
public interface UserService {
    /**
     * Creates a new user in the database.
     * @param user The user object to create.
     * @return The created user.
     */
    User createUser(User user);

    /**
     * Retrieves a user by their unique ObjectId.
     * @param id The ObjectId of the user.
     * @return An Optional containing the user if found, empty otherwise.
     */
    Optional<User> getUserById(ObjectId id);

    /**
     * Retrieves all users from the database.
     * @return A list of all users.
     */
    List<User> getAllUsers();

    /**
     * Updates an existing user in the database.
     * @param user The user object with updated fields.
     * @return The updated user.
     */
    User updateUser(User user);

    /**
     * Deletes a user by their unique ObjectId.
     * @param id The ObjectId of the user to delete.
     */
    void deleteUser(ObjectId id);

    /**
     * Finds an existing user by email or creates a new one if not found, using Google OAuth data.
     * @param email The user's email address.
     * @param googleId The user's Google ID.
     * @param fullName The user's full name.
     * @return The existing or newly created user.
     */
    User findOrCreateUserByEmail(String email, String googleId, String fullName);
}