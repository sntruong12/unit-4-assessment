import React from 'react';
import './Circles.css';

const Circles = (props) => (
  <div className="Circles">
    {
      props.circles.map(circleNum => (
        <div 
          className={ props.selectedCircle === circleNum ? "selected" : ""}
        >
          {circleNum}
        </div>
      ))
    }
  </div>
);

export default Circles;