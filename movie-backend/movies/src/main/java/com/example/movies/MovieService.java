package com.example.movies;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


// our business logic will go 
// it uses repository class talk to database and get mmovies and other actions
@Service
public class MovieService {
    @Autowired

    private MovieRepository movieRepository;
    
    public List<Movie> allMovies(){
        return movieRepository.findAll();

    } 

// there are cases there isnt any movie with id so we have to let java that null is the possibility
    public Optional<Movie> singleMovie(String imdbId){

        return movieRepository.findMovieByImdbId(imdbId);
    }
}
