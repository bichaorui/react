import ReactDOM from 'react-dom';
import React, {Component} from 'react';

import './styles/initialize.scss';
import './styles/mixins.scss';
import './styles/variable.scss';

import Main from './router/index'

ReactDOM.render(
  <Main/>,
  document.getElementById("root")
);
