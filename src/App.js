import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MoviesPlayer from './components/MoviesPlayer';
import AllMovies from './components/AllMovies';
import Logo from './components/Logo';
import Axios from 'axios';

class App extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    Axios.get("http://localhost:3000/movies").then((response) => {
      this.setState({
        movies: response.data
      })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Logo />
        <Switch>
          <Route path="/" exact component={() => <AllMovies movies={this.state.movies} />} />
          <Route path="/video/:title" component={(props) => <MoviesPlayer movies={this.state.movies} {...props} />} />
        </Switch>
      </BrowserRouter>
    )
  }

}



export default App;
