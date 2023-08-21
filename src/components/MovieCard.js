import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const MovieCard = ({ movie }) => {
  return (
     
    <Card style={{ maxWidth: '200px', height:"300px", margin: '10px' }}>
      <CardMedia
        component="img"
        alt={movie.title}
        height="200"
        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      />
      <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography className='font-size' variant="body1">{movie.title}</Typography>
          <Typography variant="body2">({movie.vote_average})</Typography>
        </div>
        <p className='line-crop' >
          {movie.overview}
        </p>
      </CardContent>
    </Card>
    
  );
};

export default MovieCard;
