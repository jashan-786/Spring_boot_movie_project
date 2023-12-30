
import { RecoilRoot, atom, constSelector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import React, { useEffect } from 'react'
import axios from "axios";
import Hero from "./hero/Hero";
import { MoviesState } from "../State";


export const Home = () => {



  const setMovies = useSetRecoilState(MoviesState)
  const movies = useRecoilValue(MoviesState)
  console.log(movies)


  useEffect(() => {

    const func = async () => {
      const res = await axios.get("http://localhost:8080/api/v1/movies")
      setMovies(res.data)
      console.log(movies)

    }
    func()
  }, [])
  if (movies.length < 1)
    return (
      <div style={{ display: 'flex' , justifyContent: 'center', alignContent:'center', fontSize:100}}> Loading...</div>)
  else {
    return (
      <main>
        <Hero />
      </main>
    )
  }

}



