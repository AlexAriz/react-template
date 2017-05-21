// Packages
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Routes from './Routes';

// Styles
import css from '../assets/scss/style.scss';

const render = (Component) => {
  ReactDOM.render(
    Component,
    document.getElementById('app')
  );
};

render(Routes);

if (module.hot) {
  module.hot.accept('./Routes', () => { render(Routes) })
}