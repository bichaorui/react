import ReactDOM from 'react-dom';
import React from 'react';

import './styles/initialize.scss';
import './styles/mixins.scss';
import './styles/variable.scss';

import Main from './router/index'
import {ProviderProps} from '@/redux/index'

ReactDOM.render(
  <ProviderProps>
    <Main/>
  </ProviderProps>
  ,
  document.getElementById("root")
);
