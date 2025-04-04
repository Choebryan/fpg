package com.foolproofgolf.fpg.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//@Builder

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    private ObjectId id;

    @NotNull(message = "Full name is required")
    private String fullName;

    private String username;

    @Email(message = "Email should be valid")
    @NotNull(message = "Email is required")
    private String email;

    @NotNull(message = "Google ID is required")
    private String googleId;

    private String accountType = "user";

    // @DocumentReference
    // private List<Lesson> lessons;

    // @DocumentReference
    // private List<VideoRecording> videoRecordings;
}