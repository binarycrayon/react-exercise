import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import './index.css';
import App from './App';
import Msg from './Msg';
import CreateMsg from './CreateMsg'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={browserHistory}>
        <Router path="/" component={App}/>
        <Router path="/msg/:id" component={Msg}/>
        <Router path="/create" component={CreateMsg}/>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
