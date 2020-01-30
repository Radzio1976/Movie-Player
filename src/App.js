import React from 'react';
import Mp4Player from '../src/components/Mp4Player';
import Movies from '../src/components/Movies';

class App extends React.Component {
  state = {
    movies: [
      {
        id: 0,
        title: "Film jakiśtam 1",
        url: "https://youtu.be/Dr8nb2DEGtY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 1,
        title: "Film jakiśtam 2",
        url: "https://youtu.be/zvcTNfBY8As",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 2,
        title: "Film jakiśtam 3",
        url: "https://youtu.be/Y2ATJB9QMkU",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 3,
        title: "Film jakiśtam 4",
        url: "https://youtu.be/Y2ATJB9QMkU",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ],
    currentMovie: 0
  }

  render() {
    let cur = null
    for (let i = 0; i < this.state.movies.length; i++) {
      if (this.state.currentMovie === this.state.movies[i].id) {
        cur = this.state.movies[i]
      }
    }
    return (
      <div className="App">
        <Mp4Player movie={cur} />
        <Movies movies={this.state.movies} />
      </div>
    )
  }
}



export default App;
