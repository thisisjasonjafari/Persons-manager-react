import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './App.css'
import './index.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/font-awesome/css/font-awesome.min.css'

render((
  <div className="App" >
    <App />
  </div>
), document.getElementById('root'));