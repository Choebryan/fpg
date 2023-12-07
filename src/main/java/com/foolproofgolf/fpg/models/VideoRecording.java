package com.foolproofgolf.fpg.models;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Document(collection = "videoRecordings")
@Data
@AllArgsConstructor
public class VideoRecording {
    
    @Id
    private ObjectId id;

    private ObjectId lessonId;

    private String videoTitle;

    private String videoUrl;

    private LocalDateTime recordingDateTime;
}
