import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import Router from "./router/index"
import * as serviceWorker from './serviceWorker';
import 'animate.css'
import { WOW } from 'wowjs';
new WOW({live: false}).init();


ReactDOM.render(<Router onUpdate={() => window.scrollTo(0, 0)} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
