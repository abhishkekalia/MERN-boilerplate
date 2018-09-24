import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('app'));
