import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      
    };
  }

  

  

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };
  

  render() {
    
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path='/' render={(props) => <MovieList {...props} />}/>
        <Route exact path={`/movies/:id`} render={(props) => <Movie {...props}  />}/>
      </div>
    );
  }
}
