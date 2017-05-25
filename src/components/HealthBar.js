import React from 'react';
import '../css/HealthBar.css'

// <ProgressBar percent={50%} />

const HealthBar = ({percent}) => {
  percent = Math.round(percent);

  return (
    <div className={`progress-bar-container default`}>
        <div className="progress-bar-inner" style={{width: `${percent}%`}}>{percent}%</div>
        <p>20 of 120 HP Remaining</p>
    </div>
  );
}

export default HealthBar;
