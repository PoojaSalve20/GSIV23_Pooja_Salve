import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListPage from './ListPage';
import MovieDetails from './MovieDetails';
import axios from 'axios';

const ParentComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=94e5d57690365e2086a7cc1720a891f5`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <ListPage movies={movies} />}/>
         
         
        <Route path="/details/:movieId" element={<MovieDetails movies={movies} />}/>
          
        
      </Routes>
    </Router>
  );
};

export default ParentComponent;
