package com.foolproofgolf.fpg.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Document(collection = "instructorProfile")
@Data
@AllArgsConstructor
public class InstructorProfile {
    
    @Id
    private ObjectId id;
    
    private String bio;

        //DO I NEED THIS? WHAT EVEN IS THIS? 
        // information regarding instructor profile so like about page? I feel like this should done 
        //so that the frontend makes a request to the backend to get the instructor profile info
        //which means this could be stored in the database

}
