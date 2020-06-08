import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import DragChange from './dragAndChange/dragAndChange'
import Drag from './dragAPI/drag'

ReactDOM.render(
  //严格模式
  <React.StrictMode> 
    <DragChange />
    <Drag />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
