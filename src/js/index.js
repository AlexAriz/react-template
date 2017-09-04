import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'assets/scss/style.scss';

const render = (Component) => {
  ReactDOM.render(
    Component,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
