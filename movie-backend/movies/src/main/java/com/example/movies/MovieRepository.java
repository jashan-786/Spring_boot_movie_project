package com.example.movies;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



// its kind of data access layer for api
// actually talking to database
@Repository
public interface MovieRepository  extends MongoRepository <Movie, ObjectId> {

    // some methods we have to build it by overselves
        // we can create any dyanmic queries  by using daata from model class eg movie 
    Optional<Movie> findMovieByImdbId(String imdbId);

    
}
