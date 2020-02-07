import React from 'react';
import Mp4Player from './Mp4Player';
import Movies from './Movies';

class MoviesPlayer extends React.Component {
    state = {
        movies: [],
        currentMovie: 0
    }

    componentDidMount = () => {
        this.setState({
            movies: this.props.movies,
            currentMovie: this.props.location.state.id
        })
    }

    render() {
        let cur = null
        for (let i = 0; i < this.state.movies.length; i++) {
            if (this.state.currentMovie === this.state.movies[i].id) {
                cur = this.state.movies[i]
            }
        }
        return (
            cur === null ?
                null :
                <div className="MoviesPlayer">
                    <Mp4Player movie={cur} currentMovie={this.state.currentMovie} />
                    <Movies movies={this.state.movies} currentMovie={this.state.currentMovie} changeMovie={this.changeMovie} />
                </div>
        )
    }
}

export default MoviesPlayer;