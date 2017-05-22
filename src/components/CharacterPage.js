import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Skills from './Skills';
import Stats from './Stats';
import Battle from './Battle';
import Feats from './Feats';
import TabLists from './TabLists';

class CharacterPage extends Component {
  render(){
    return(
      <div>
        <TabLists />
      </div>
    )
  }
}

export default CharacterPage;
