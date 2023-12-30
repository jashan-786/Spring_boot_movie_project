import { Card, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function MovieCard({ movie }) {
    const Navigate=useNavigate()

    return (
        <div >
            <Paper key={movie.imdbId}>
                <div className='movie-card-container'>
           
                    <div className="movie-card"  style={{ "--img": `url(${movie.backdrops[0]})` }}> 
                        <div className="movie-detail">
                            <div className="movie-poster">
                                <img src={movie.poster} alt="" />
                            </div>
                            <div className="movie-title">
                                <h4>{movie.title}</h4>
                            </div>
                            <div className="movie-buttons-container">
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>

                                        <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => Navigate(`/Reviews/${movie.imdbId}`)} >Reviews</Button>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </Paper>

        </div>
    )
}

export default MovieCard