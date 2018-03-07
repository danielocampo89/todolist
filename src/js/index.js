import React from 'react';
import ReactDOM from 'react-dom';

import $ from "jquery";
import 'bootstrap';
import '../styles/index.scss';

import {Todolist} from './Todolist.jsx';




// Add CSS files to bundle
//require('../css/styles.scss');
// Render application to DOM
ReactDOM.render(
    <Todolist />,
    document.querySelector('#app')
);