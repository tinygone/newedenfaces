import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/Home';
import App from './components/App';
import About from './components/About';

export default (
    <Route component={App}>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
    </Route>
)