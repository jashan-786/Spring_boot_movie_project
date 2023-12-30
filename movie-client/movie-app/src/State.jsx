
import { atom } from 'recoil';

export const MoviesState = atom({
    key: 'movieState',
    default: []
  });
  export const MovieState = atom({
    key: 'moviesState',
    default: ''
  });
  export const MovieReview = atom({
    key: 'movieReviews',
    default: []
  });

