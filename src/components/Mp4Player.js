import React from 'react';
import ReactPlayer from 'react-player';
import Comments from './Comments';

class Mp4Player extends React.Component {
    render() {
        console.log(this.props.movie.url)
        return (
            <div className="Mp4Player-and-Comments-container">
                <div className="Mp4Player">
                    <div className="react-player-wrapper">
                        <ReactPlayer
                            className="react-player"
                            url={this.props.movie.url} playing controls />
                    </div>
                </div>
                <div className="nowPlaying-title">
                    <h1>{this.props.movie.title}</h1>
                    <h4>{this.props.movie.description}</h4>
                </div>
                <Comments currentMovie={this.props.currentMovie} />
            </div>
        )
    }
}

export default Mp4Player;