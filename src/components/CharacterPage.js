import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Skills from './Skills';
import Stats from './Stats';
import Battle from './Battle';
import Feats from './Feats';
import TabLists from './TabLists';
import Points from './Points';
import Attributes from './Attributes';
import Money from './Money';
import '../css/CharacterPage.css';
import Betty from '../images/betty.png';
import HealthBar from './HealthBar';

class CharacterPage extends Component {
  render(){
    return(
      <div>
        <div className="Profile">
          <img src={Betty} alt="avatar image" />
          <br/>
          <Points />
          <HealthBar percent={20} />
          <p>24 of 120 HP remaining</p>
        </div>
        <div className="Points">
          <br />
          <Money />
        </div>
        <div className="Attributes">
          <Attributes />
        </div>
        <div className="TabLists">
          <TabLists />
        </div>
      </div>
    )
  }
}

export default CharacterPage;
