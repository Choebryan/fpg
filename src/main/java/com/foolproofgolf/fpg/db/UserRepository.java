package com.foolproofgolf.fpg.db;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.foolproofgolf.fpg.model.User;

/**
 * Repository interface for managing User entities in MongoDB.
 */
@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {
    /**
     * Finds a user by their email address.
     * @param email The email address to search for.
     * @return An Optional containing the user if found, empty otherwise.
     */
    Optional<User> findByEmail(String email);
}