import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { MovieReview, MovieState } from '../../State';

const Reviews = () => {


    let params = useParams();
    const imdbId = params.id;




    const [movie, setMovie] = useRecoilState(MovieState)
    const [reviews, setReview] = useRecoilState(MovieReview)


    useEffect( () => {
          axios(`http://localhost:8080/api/v1/movies/${imdbId}`).then((res)=> { setMovie(res.data)     
          setReview(res.data.reviewIds)})
    

    }, [])

    
    const rv = {
        imdbId: imdbId,
        reviewBody: "test"

    }
   

    if( movie.length<1)
    return <div> loading ...</div>
    else
    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm rv={rv} setr={setReview} labelText="Write a Review?" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    
                    {
                        reviews?.map((r) => {
                            return (
                                <>
                                    <Row>
                                        <Col>{ r?.body }</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews