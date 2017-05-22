import React, {Component} from 'react';

class Skills extends Component {
  render(){
    return(
      <div>
      <form className="SkillsForm" action="" method="post">
        <input type="number" name="str" /><p>Strength</p>
        <input type="number" name="dex"  /><p>Dexterity</p>
        <input type="number" name="const"  /><p>Constitution</p>
        <input type="number" name="int"  /><p>Intellegence</p>
        <input type="number" name="wis"  /><p>Wisdom</p>
        <input type="number" name="cha"  /><p>Charisma</p>
      </form>
      </div>
    )
  }
}

export default Skills;
