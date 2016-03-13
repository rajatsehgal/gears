import React, {PropTypes} from 'react';
import Radium from 'radium';

const clockwiseKeyframes = Radium.keyframes({
  '100%': { transform: 'rotate(360deg)' }
}, 'clockwise');

const counterclockwiseKeyframes = Radium.keyframes({
  '100%': { transform: 'rotate(-360deg)' }
}, 'counterclockwise');

const Gear = ({ spinDir, outerRadius, innerRadius, coreThickness, spokeThickness, color }) => {
  let numSpokes = 6;
  const Spokes = [];

  while (numSpokes > 0) {
    Spokes.push(
      <div
        key={numSpokes}
        style={{
          height: innerRadius + coreThickness - 2,
          width: spokeThickness,
          borderTopWidth: outerRadius - (innerRadius + coreThickness - 2),
          borderTopColor: color,
          borderTopStyle: 'solid',
          borderRadius: 3,
          position: 'absolute',
          transformOrigin: 'bottom center',
          top: 0,
          left: outerRadius - (spokeThickness / 2),
          transform: `rotate(${numSpokes * 60}deg)`
        }}
      />
    );
    numSpokes -= 1;
  }

  return (
    <div
      style={{
        height: 2 * outerRadius,
        width: 2 * outerRadius,
        animation: `x 3s infinite linear`,
        animationName: spinDir === 'clockwise' ? clockwiseKeyframes : counterclockwiseKeyframes
      }}
    >
      <div
        style={{
          boxSizing: 'border-box',
          height: 2 * (innerRadius + coreThickness),
          width: 2 * (innerRadius + coreThickness),
          borderRadius: '50%',
          border: `${coreThickness}px solid ${color}`,
          position: 'absolute',
          top: outerRadius - innerRadius - coreThickness,
          left: outerRadius - innerRadius - coreThickness
        }}
      ></div>
      {Spokes}
    </div>
  );
};

Gear.propTypes = {
  spinDir: PropTypes.oneOf(['clockwise', 'counterclockwise']),
  outerRadius: PropTypes.number,
  innerRadius: PropTypes.number,
  coreThickness: PropTypes.number,
  spokeThickness: PropTypes.number,
  color: PropTypes.string
};

Gear.defaultProps = {
  spinDir: 'clockwise',
  outerRadius: 30,
  innerRadius: 8,
  coreThickness: 12,
  spokeThickness: 12,
  color: '#333'
};

export default Radium(Gear);