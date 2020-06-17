import React from 'react';
import { render } from 'react-dom';
import App from './App';

import './index.css'
import 'react-toastify/dist/ReactToastify.css'

render( <App appTitle="Persons Manager" / >  , document.getElementById('root'));