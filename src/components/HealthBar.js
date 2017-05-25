import React, { Component } from 'react';
import '../css/HealthBar.css'

// <ProgressBar percent={50%} />

class HealthBar extends Component {
  render() {
      let percent = Math.round(this.props.percent);

      return (
        <div className={`progress-bar-container default`}>
            <div className="progress-bar-inner" style={{width: `${percent}%`}}>{percent}%</div>
        </div>
      );
  }
}

export default HealthBar;
