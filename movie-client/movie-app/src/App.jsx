
import './App.css'

import { Home } from './componenets/Home';
import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react'


import axios from 'axios';
import { RecoilRoot } from 'recoil';
import Header from './componenets/Header/Header';
import Trailer from './componenets/trailer/Trailer';
import Reviews from './componenets/reviews/Reviews';

function App() {


  return (
    <RecoilRoot>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}/>
        <Route path="/Reviews/:id" element={<Reviews/>}/>
        <Route path='/watchList' element={ <div style={{ textAlign: 'center', fontSize: 100}}> Register Needed!!</div>} />
      </Routes>
    </RecoilRoot>
  )
}

export default App
