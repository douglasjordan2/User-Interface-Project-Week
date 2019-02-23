import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';

document.querySelectorAll('*').forEach(element => {
  element.style.margin = '0'
  element.style.padding = '0'
  element.style.fontSize = '100%'
  element.style.boxSizing = 'border-box'
})

ReactDOM.render(<HomePage />, document.getElementById('root'));