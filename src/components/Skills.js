import React, {Component} from 'react';
import '../css/Skills.css';


class Skills extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-10">
            <form id="SkillsForm" action="" method="post">
              <input type="number" /><p>Strength</p>
              <input type="number" /><p>Dexterity</p>
              <input type="number" /><p>Constitution</p>
              <input type="number" /><p>Intellegence</p>
              <input type="number" /><p>Wisdom</p>
              <input type="number" /><p>Charisma</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
