/* eslint-disable prop-types */
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app'), // eslint-disable-line no-undef
);

module.hot.accept();
