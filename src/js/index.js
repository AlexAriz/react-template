import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes';

import '../assets/scss/style.scss';

const render = (Component) => {
  ReactDOM.render(
    Component,
    document.getElementById('app')
  );
};

render(Routes);

if (module.hot) {
  module.hot.accept('./Routes', () => { render(Routes); });
}
