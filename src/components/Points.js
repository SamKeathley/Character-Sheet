import React, {Component} from 'react';

class Points extends Component {
  render(){
    return(
      <div>
      <form className="PointsForm" action="" method="post">
        <input type="number" name="str" placeholder="4"/><p>LVL</p>
        <input type="number" name="str" placeholder="6"/><p>SPD</p>
        <input type="number" name="str" placeholder="1900/3600"/><p>EXP</p>

      </form>
      </div>
    )
  }
}

export default Points;
