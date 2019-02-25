import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Task1 from './task1'
import App1 from './components/App1'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App1/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();