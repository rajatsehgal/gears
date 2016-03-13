import React, {PropTypes} from 'react';
import Gear from './Gear';
import Radium from 'radium';

const BusyGears = ({busy}) => (
  <div
    style={{
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      userSelect: 'none',
      top: 0,
      left: 0,
      background: 'rgba(255, 255, 255, 0.5)',
      zIndex: 999,
      display: busy ? 'block' : 'none',
      position: 'absolute'
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div
        style={{
          display: 'inline-block',
          verticalAlign: 'middle'
        }}
      >
        <Gear
          spinDir="clockwise"

        />
      </div>
      <div
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
          marginLeft: -20,
          marginTop: 65
        }}
      >
        <Gear
          spinDir="counterclockwise"
        />
      </div>
    </div>
  </div>
);

BusyGears.propTypes = {
  busy: PropTypes.bool
};

BusyGears.defaultProps = {
  busy: true
};

export default Radium(BusyGears);