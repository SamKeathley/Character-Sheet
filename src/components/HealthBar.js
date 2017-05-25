import React from 'react';
import '../css/HealthBar.css'

// <ProgressBar percent={50%} />

const HealthBar = ({percent}) => {
  percent = Math.round(percent);

  return (
    <div className={`progress-bar-container default`}>
        <div className="progress-bar-inner" style={{width: `${percent}%`}}>{percent}%</div>
    </div>
  );
}

export default HealthBar;
