import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => (
  <div className="CircleSelector">
    {
      props.circles.map(circleNum => (
        <button 
          onClick={props.handleClick}
          className={props.selectedCircle === circleNum ?
          "selected" : ""
          }
          id={circleNum}
        >
          { 
            props.selectedCircle === circleNum ?
            `Circle ${circleNum} Selected`
            :
            `Select Circle ${circleNum}`
          }
        </button>
      ))
    }
  </div>
);

export default CircleSelector;