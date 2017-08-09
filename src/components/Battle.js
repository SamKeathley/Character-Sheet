import React, {Component} from 'react';

class Battle extends Component {
  render(){
    return(
      <div>
      <form className="SkillsForm" action="" method="post">
        <input type="number" name="attk" /><p>Attack Bonus</p>
        <input type="number" /><p>Strength Save</p>
        <input type="number" /> <p>Dexterity Save</p>
        <input type="number" /> <p>Constitution Save</p>
        <input type="number" /> <p>Intellegence Save</p>
        <input type="number" /> <p>Wisdom Save</p>
        <input type="number" /> <p>Charisma Save</p>
      </form>
      </div>
    )
  }
}

export default Battle;
