package com.foolproofgolf.fpg.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Document(collection = "testimonials")
@Data
@AllArgsConstructor
public class Testimonial {
    
    @Id
    private ObjectId id;

    private ObjectId customerId;

    private String text;

    private int rating;
}
