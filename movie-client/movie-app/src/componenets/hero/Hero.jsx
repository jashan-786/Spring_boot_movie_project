import React from 'react'


import Carousel from 'react-material-ui-carousel';
import { useRecoilValue } from 'recoil'
import { MoviesState } from '../../State'
import MovieCard from '../movieCard/MovieCard'
import './Hero.css';



const Hero = () => {

    const movies = useRecoilValue(MoviesState)
    return (
        <div className='movie-carousel-container'>
            <Carousel animation="slide">
                {movies?.map((movie) => {
                    return (

                        <MovieCard movie={movie} />
                    )
                })}

            </Carousel>
        </div>


    )
}


export default Hero;

/*

*/
