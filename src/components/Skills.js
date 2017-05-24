import React, {Component} from 'react';

class Skills extends Component {
  render(){
    return(
      <div>
      <form id="SkillsForm" action="" method="post">
        <input type="number" /><p>Strength</p>
        <input type="number" /><p>Dexterity</p>
        <input type="number" /><p>Constitution</p>
        <input type="number" /><p>Intellegence</p>
        <input type="number" /><p>Wisdom</p>
        <input type="number" /><p>Charisma</p>
      </form>
      </div>
    )
  }
}

export default Skills;
