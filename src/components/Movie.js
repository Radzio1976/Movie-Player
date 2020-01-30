import React from 'react';
import ReactPlayer from 'react-player';

class Movie extends React.Component {
    render() {
        return (
            <div className="Movie">
                <div className="movie-wrapper">
                    <ReactPlayer className="movie-player" url={this.props.url} />
                </div>
                <div className="movie-description-wrapper">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description.slice(0, 80)} ...</p>
                </div>
            </div>
        )
    }
}

export default Movie;