import React from 'react';
import { withRouter } from 'react-router-dom';

class Logo extends React.Component {
    render() {
        return (
            <div className="Logo">
                <h1 onClick={() => this.props.history.push("/")}>My<span>Tube</span></h1>
            </div>
        )
    }
}

export default withRouter(Logo);