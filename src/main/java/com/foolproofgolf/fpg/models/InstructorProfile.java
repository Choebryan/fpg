package com.foolproofgolf.fpg.models;

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


}
