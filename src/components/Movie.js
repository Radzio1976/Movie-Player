import React from 'react';
import ReactPlayer from 'react-player';

class Movie extends React.Component {

    render() {
        return (
            <div className="Movie" style={{ visibility: this.props.currentMovie === this.props.id ? "hidden" : "visible", height: this.props.currentMovie === this.props.id ? "0px" : "", marginBottom: this.props.currentMovie === this.props.id ? "0px" : "" }}>
                <div className="movie-wrapper">
                    <ReactPlayer className="movie-player" url={this.props.url} />
                </div>
                <div className="movie-description-wrapper">
                    <h3>{this.props.title.slice(0, 20)} ...</h3>
                    <p>{this.props.description.slice(0, 80)} ...</p>
                </div>
            </div>
        )
    }
}

export default Movie;