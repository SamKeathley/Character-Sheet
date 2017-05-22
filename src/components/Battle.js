import React, {Component} from 'react';

class Battle extends Component {
  render(){
    return(
      <div>
      <form className="SkillsForm" action="" method="post">
        <input type="number" name="attk" /><p>Attack Bonus</p>
        <input type="number" name="will"  /><p>Will Save</p>
        <input type="number" name="reflex"  /><p>Reflex Save</p>
        <input type="number" name="fort"  /><p>Fortitude Save</p>
      </form>
      </div>
    )
  }
}

export default Battle;
