import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Skills from './Skills';
import Stats from './Stats';
import Battle from './Battle';
import Feats from './Feats';
import '../css/TabLists.css';

class TabLists extends Component {
  render(){
    return(
      <div className="tab-container">
        <Tabs>
          <TabList>
            <Tab>Skills</Tab>
            <Tab>Stats</Tab>
            <Tab>Battle</Tab>
          </TabList>
          <TabList className="last">
            <Tab>Feats/Spells</Tab>
          </TabList>

          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <Stats />
          </TabPanel>
          <TabPanel>
            <Battle />
          </TabPanel>
          <TabPanel>
            <Feats />
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default TabLists;
