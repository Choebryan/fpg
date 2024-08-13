package com.foolproofgolf.fpg.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

//@Builder

@Document(collection = "users")
@Data
@AllArgsConstructor
public class User {

    @Id
    private ObjectId id;

    private String firstName;

    private String lastName;

    private String username;

    private String email;

    private String password;

    private String accountType;

    // @DocumentReference
    // private List<Lesson> lessons;

    // @DocumentReference
    // private List<VideoRecording> videoRecordings;
}