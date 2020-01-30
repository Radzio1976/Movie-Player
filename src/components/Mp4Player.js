import React from 'react';
import ReactPlayer from 'react-player';

class Mp4Player extends React.Component {
    render() {
        console.log(this.props.movie.url)
        return (
            <div className="Mp4Player">
                <div className="react-player-wrapper">
                    <ReactPlayer
                        className="react-player"
                        url={this.props.movie.url} playing />
                </div>
                <div className="nowPlaying-title">
                    <h1>{this.props.movie.title}</h1>
                    <h4>{this.props.movie.description}</h4>
                </div>
            </div>
        )
    }
}

export default Mp4Player;