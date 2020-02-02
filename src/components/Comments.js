import React from 'react';
import Axios from 'axios';

class Comments extends React.Component {
    state = {
        name: "",
        comment: "",
        comments: []
    }

    componentDidMount() {
        const comments = this.state.comments;
        Axios.get("http://localhost:3000/comments").then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].movieId === this.props.currentMovie) {
                    comments.push(response.data[i])
                }
            }
            this.setState({
                comments
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3000/comments", { movieId: this.props.currentMovie, name: this.state.name, comment: this.state.comment }).then((response) => {
            this.setState({
                name: "",
                comment: ""
            })
        })
    }

    render() {
        console.log(this.state.comments)
        return (
            <div className="Comments-container">
                <form onSubmit={this.handleSubmit}>
                    <label>Imię
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>Zostaw komentarz
                        <textarea name="comment" value={this.state.comment} onChange={this.handleChange} />
                    </label>
                    <button>Wyślij</button>
                </form>
                {
                    this.state.comments.map((value) => {
                        console.log(value)
                        return (
                            <div className="Comments">
                                <h3>{value.name}</h3>
                                <p>{value.comment}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Comments;