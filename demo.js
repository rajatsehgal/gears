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
    <h1>My App</h1>

    <p>
      I am the main content and I am currently overlayed with the Busy Gears so I'm faded out a
      little.
    </p>
    <p>
      The Busy gears are vertically and horizontally centered on the page.
    </p>

    <BusyGears />
  </StyleRoot>
), document.getElementById('demo'));
