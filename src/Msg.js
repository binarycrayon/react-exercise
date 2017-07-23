import React, { Component } from 'react';
import {Link} from 'react-router';

class Msg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {}
        };
    }

    componentDidMount() {
        const URL = "https://yudi-test.herokuapp.com/";
        let MESSAGE_URL = URL + 'messages/' + this.props.params.id;
        fetch(MESSAGE_URL)
            .then((response) => response.json())
            .then((responseJson) => {
                const message = responseJson;
                console.log(message);
                this.setState({ message });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    handleDelete() {
        // Handle delete here
        console.log(this.state.message.id);
    }

    render() {
        return (
            <div class="message">
                <div class="entry">Text: {this.state.message.text}</div>
                <div class="entry">Created: {this.state.message.created_at}</div>
                <div class="entry">Updated: {this.state.message.updated_at}</div>
                <button onClick={(e) => this.handleDelete(e)}>
                    Delete Message
                </button>
                <Link to="/">Back</Link>
            </div>
        );
  }
}

export default Msg;
