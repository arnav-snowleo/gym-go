import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';                      //div with shading, and colors

import './App.css';

import ExerciseDetailPage from './pages/ExerciseDetailPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width ="400px" sx={{ width: {xl: '1448px'} }} m="auto">
        <Navbar/>
        <Routes >
            <Route path ="/" element = { <HomePage/> } />
            <Route path ="/exercise/:id" element = { <ExerciseDetailPage/>}  />
        </Routes>
        <Footer/> 
    </Box>
  )
}

export default App