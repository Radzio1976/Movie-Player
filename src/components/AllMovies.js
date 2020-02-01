import React from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';

class AllMovies extends React.Component {
    state = {
        movies: this.props.movies
    }

    render() {
        console.log(this.state.movies)
        return (
            <div className="AllMovies">
                {
                    this.state.movies.map((value) => {
                        console.log(value)
                        const prettyUrl = value.title.toLowerCase().replace(/ /ig, "-")
                        return (
                            <div className="movie-container">
                                <div className="movie-player-wrapper">
                                    <ReactPlayer className="video-player" url={value.url} />
                                </div>
                                <div onClick={() => this.props.history.push(`/video/${prettyUrl}`, { id: value.id })} className="video-description-wrapper">
                                    <h3>{value.title.slice(0, 20)} ...</h3>
                                    <p>{value.description.slice(0, 80)} ...</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default withRouter(AllMovies);