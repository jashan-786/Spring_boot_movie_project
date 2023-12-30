package com.example.movies;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "movies")
@Data // getter setter 
@AllArgsConstructor // generl constructor for all paraneters
@NoArgsConstructor // no args constructor
public class Movie {
    @Id
    private ObjectId id;

    private String  imdbId;
    private String  title;

    private String releaseDate;

    private String trailerLink;

    private String poster;

    private List<String> genres;

    private List<String> backdrops;
    @DocumentReference // THIS WILL CAUSE DATABASE STORE ONLY IDS OF REVIEWS AND REVIS WILL IN SEPATE COLLECTION
    private List<Review> reviewIds;

  
}
