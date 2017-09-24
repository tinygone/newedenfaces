import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import HelloWorld from "./HelloWorld";
import routes from './routes1';
//import createBrowserHistory from 'history/lib/createBrowserHistory';
//import routes from './routes';
//import Navbar from './components/Navbar';

let history = createBrowserHistory();

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));

//const element = <h1>Hello, world!</h1>;
/*
ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('app')
);*/
