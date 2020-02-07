import React from 'react';
import Movie from '../components/Movie';

class Movies extends React.Component {

    render() {
        return (
            <div className="Movies">
                {
                    this.props.movies.map((value, index) => {
                        return (
                            <Movie key={index} id={value.id} url={value.url} title={value.title} description={value.description} currentMovie={this.props.currentMovie} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Movies;