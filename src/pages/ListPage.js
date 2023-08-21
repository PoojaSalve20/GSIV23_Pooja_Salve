import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import axios from 'axios';
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';

const ListPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=94e5d57690365e2086a7cc1720a891f5`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      }
    };

    fetchUpcomingMovies();
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=94e5d57690365e2086a7cc1720a891f5&query=${query}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

   
  
  return (
    <div>
         

         
       <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={handleSearch}
      />
       
      <div className='card-container'>
        {searchQuery
          ? searchResults.map((movie) => (
              <Link className='link' to={`/details/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            ))
          : movies.map((movie) => (
              <Link className='link' to={`/details/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            ))}
      </div>
       
    </div>
  );
};

export default ListPage;
