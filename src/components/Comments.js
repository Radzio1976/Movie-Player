import React from 'react';
import Axios from 'axios';

class Comments extends React.Component {
    state = {
        name: "",
        comment: "",
        comments: [],
        error: ""
    }

    componentDidMount() {
        const comments = this.state.comments;
        Axios.get("http://localhost:3000/comments").then((response) => {
            for (let i = response.data.length - 1; i >= 0; i--) {
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
        const comments = this.state.comments;
        let today = new Date();
        let time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " | " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        if (this.state.name.length > 5 || this.state.comment.length > 10) {
            Axios.post("http://localhost:3000/comments", { movieId: this.props.currentMovie, time: time, name: this.state.name, comment: this.state.comment }).then((response) => {
                comments.splice(0, 0, { movieId: this.props.currentMovie, time: time, name: this.state.name, comment: this.state.comment })
                this.setState({
                    name: "",
                    comment: "",
                    comments
                })
            })
        } else {
            this.setState({
                error: "Pola Imię oraz Zostaw komentarz nie mogą być puste"
            })
            return
        }
    }

    render() {
        return (
            <div className="Comments-container">
                <form onSubmit={this.handleSubmit}>
                    <label>Imię
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>Zostaw komentarz
                        <textarea name="comment" value={this.state.comment} onChange={this.handleChange} />
                    </label>
                    <button>Dodaj komentarz</button>
                </form>
                <p className="comment-error">{this.state.error}</p>
                {
                    this.state.comments.map((value) => {
                        console.log(value)
                        return (
                            <div className="Comments">
                                <h3>{value.name} <span>{value.time}</span></h3>
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