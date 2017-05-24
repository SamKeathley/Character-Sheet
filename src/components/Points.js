import React, {Component} from 'react';
import '../css/Points.css';

class Points extends Component {
  render(){
    return(
      <div className="points">
      <form className="PointsForm" action="" method="post">
        <input type="number" name="lvl" placeholder="4"/>
        <input type="number" name="spd" placeholder="6"/>
        <input type="number" id="end" placeholder="1900/3600"/>
      </form>
      <br />
        <p>LVL</p>
        <p>SPD</p>
        <p id="exp">EXP</p>
      </div>
    )
  }
}

export default Points;
