import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './Componentes/serviceWorker';
import Router from './Componentes/Router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootswatch/dist/slate/bootstrap.min.css';

ReactDOM.render(<Router />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
