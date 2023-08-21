import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import MovieDetails from './components/MovieDetails'; 
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ListPage/>} />
        <Route path="/details/:movieId" element={<MovieDetails/>} />
      </Routes>
    </Router>
  );
};

export default App;
