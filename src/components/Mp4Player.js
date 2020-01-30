import React from 'react';
import ReactPlayer from 'react-player';

class Mp4Player extends React.Component {
    render() {
        return (
            <div className="Mp4Player">
                <ReactPlayer
                    className="react-player"
                    url={this.props.movie.url} playing />
            </div>
        )
    }
}

export default Mp4Player;