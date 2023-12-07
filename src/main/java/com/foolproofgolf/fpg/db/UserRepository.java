package com.foolproofgolf.fpg.db;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.foolproofgolf.fpg.models.User;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {
    
    

}
