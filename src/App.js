import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        const URL = "https://yudi-test.herokuapp.com/";
        let MESSAGES = URL + 'messages/';
        fetch(MESSAGES)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.results);
                const messages = responseJson.results;
                this.setState({ messages })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="App">
                <ul> {this.state.messages.map(item =>
                    <li>{item.text}</li>)}
                </ul>
            </div>
        );
  }
}

export default App;
