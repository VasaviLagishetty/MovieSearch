import React from 'react';
import './App.css';
import Details from './Details';
import MovieList from './MovieList';
import { BrowserRouter as Router, Route, } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Route path="/" exact component={MovieList} />
      <Route path="/:imdbID" exact component={Details} />
    </div>
  </Router>
  );
}



export default App;