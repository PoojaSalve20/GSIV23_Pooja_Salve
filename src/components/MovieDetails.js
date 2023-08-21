import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom';

const MovieDetails = () => {
  const history = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=94e5d57690365e2086a7cc1720a891f5`
        );
        console.log(response.data)
        setMovie(response.data);
        
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

//   const goBackToList = () => {
//     history.goBack();
//   };

  if (!movie) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  const convertToHHMM = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}H : ${mins}M`;
  };
  return (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie Details
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <Link className='link' to="/" ><HomeIcon /></Link>
          </IconButton>
         
          
        </Toolbar>
      </AppBar>
    </Box>
    <Box style={{display:"flex",gap: 10,marginTop:"100px",marginLeft:"10px"}}>

        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{width:"10%",height:"10%"}} />
        <div>
      <Typography variant="h4">{movie.title}</Typography>
      <Typography variant="body2">Rating: {movie.vote_average}</Typography>
      <Typography variant="body2">Year of Release: {movie.release_date}</Typography>
      <Typography variant="body2">Length: {convertToHHMM(movie.runtime)}</Typography>
      <Typography className='line-crop-2' variant="body2">Description: {movie.overview}</Typography>
      
      <Button variant="contained" onClick={() => history("/")}>
        Go Back
      </Button>
      </div>
     
    </Box>
    </>
  );
};

export default MovieDetails;
