package com.example.movies;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:5173")


// api layer in rest api
// its using service class and delegating the task of fetching all the 
// task of database and giving it back to api layer.
@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {
    // need reference to our service class

    @Autowired
    private MovieService movieService;

    @GetMapping
    public ResponseEntity<List<Movie> >getAllMovies(){

        return  new ResponseEntity<List<Movie>>( movieService.allMovies(), HttpStatus.OK);
    }
        // get mapping will actually take parameter 

        // with the @pathvariable Objectid framework jnow we will pasiing informatin in path variable as Object id
        // whatever we getting throught path we want to conver it into onject id 

    @GetMapping("/{imdbId}")
    public ResponseEntity <Optional<Movie>> getSingleMovie(@PathVariable String imdbId){
       // System.out.println(movieService.singleMovie(id));
        return new ResponseEntity<Optional<Movie>>(movieService.singleMovie(imdbId), HttpStatus.OK);


    }
    
    
}
