import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Skills from './Skills';
import Stats from './Stats';
import Battle from './Battle';
import Feats from './Feats';
import TabLists from './TabLists';
import Points from './Points';
import Attributes from './Attributes';

class CharacterPage extends Component {
  render(){
    return(
      <div>
        <div className="Points">
          <Points />
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
