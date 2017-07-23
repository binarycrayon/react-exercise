import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

import './App.css';

class CreateMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            csrfToken: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const URL = "https://yudi-test.herokuapp.com/";
        let MESSAGES = URL + 'messages/';
        fetch(MESSAGES)
            .then((response) => {
                console.log(response.headers.get('Cookie'));
                console.log(response);
                return response.json();
            })
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit = (e) => {
        console.log(this.state.message);
        e.preventDefault();

        const URL = "https://yudi-test.herokuapp.com/";
        let MESSAGES = URL + 'messages/';
        let payload = new FormData();
        payload.append("json", JSON.stringify({text: this.state.message}));
        fetch(MESSAGES, {
            method: "POST",
            body: payload
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <form role="form" className="form-inline" role="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="input-group">
                    <input type="text" placeholder="Enter a message" className="form-control"
            value={this.state.message} onChange={this.handleChange}
                    />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
     }
}

export default CreateMsg;
