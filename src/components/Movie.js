import React from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom'

class Movie extends React.Component {
    changeMovie = () => {
        this.props.changeMovie();//call parent `changeMovie` method
    }

    render() {
        const prettyUrl = this.props.title.toLowerCase().replace(/ /ig, "-")
        return (
            <div className="Movie" style={{ visibility: this.props.currentMovie === this.props.id ? "hidden" : "visible", height: this.props.currentMovie === this.props.id ? "0px" : "", marginBottom: this.props.currentMovie === this.props.id ? "0px" : "", paddingBottom: this.props.currentMovie === this.props.id ? "0px" : "" }}>
                <div className="movie-wrapper">
                    <ReactPlayer className="movie-player" url={this.props.url} />
                </div>
                <div onClick={() => {
                    this.props.history.push(`/video/${prettyUrl}`, { id: this.props.id })
                    window.location.reload()
                }} className="movie-description-wrapper">
                    <h3>{this.props.title.slice(0, 20)} ...</h3>
                    <p>{this.props.description.slice(0, 80)} ...</p>
                </div>
            </div >
        )
    }
}

export default withRouter(Movie);