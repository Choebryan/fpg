package com.foolproofgolf.fpg.models;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Document(collection = "lessons")
@Data
@AllArgsConstructor
public class Lesson {

    @Id
    private ObjectId id;

    private ObjectId customerId;

    private LocalDateTime lessonDateTime;

    private int lessonDuration;

    private String status; // (Booked, Completed, Canceled)
}
