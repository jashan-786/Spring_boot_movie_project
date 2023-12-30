package com.example.movies;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;
    //to asscociate this first we need to create a template


    // one way to talk to the repositires is repository and service
    // second way is Template some thime we have operation by we cant implement it in repository so we need tempate to form up new
    // dynamic query with using the repository
    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired

    private MovieRepository movieRepository;
    // find moview by imdb id 
    // creae a new review and associate review with it
    public Optional<Movie>  createReview(String reviewBody, String imdbId){
        // return data actually we pushed inside our data base
        Review review= reviewRepository.insert(new Review(reviewBody));
        

        // associate to one of the movies
        // which class we want o update
        mongoTemplate.update(Movie.class)
        .matching(Criteria.where("imdbId").is(imdbId))
        .apply(new Update().push("reviewIds").value(review))
        .first();
        
        return movieRepository.findMovieByImdbId(imdbId);
     
    }
    
}
