import React from 'react';
import ReactDom from 'react-dom';
import {StyleRoot} from 'radium';

import BusyGears from './BusyGears';

ReactDom.render((
  <StyleRoot
    style={{
      width: '100%',
      height: '100%'
    }}
  >
    <BusyGears />
  </StyleRoot>
), document.getElementById('demo'));
