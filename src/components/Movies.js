import React from 'react';
import Movie from '../components/Movie';

class Movies extends React.Component {
    render() {
        return (
            <div className="Movies">
                {
                    this.props.movies.map((value) => {
                        return (
                            <Movie url={value.url} title={value.title} description={value.description} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Movies;