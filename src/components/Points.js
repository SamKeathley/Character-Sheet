import React, {Component} from 'react';
import '../css/Points.css';

class Points extends Component {
  render(){
    return(
      <div className="container points">
        <div className="row">
          <div className="col-6 align-top">
            <form className="PointsForm" action="" method="post">
              <input type="number" name="lvl" placeholder="4"/>
              <input type="number" name="spd" placeholder="6"/>
              <input type="number" id="end" placeholder="1900/3600"/>
            </form>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-xs-6">
            <p>LVL</p>
            <p>SPD</p>
            <p id="exp">EXP</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Points;
