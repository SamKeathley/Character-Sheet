import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Skills from './Skills';
import Stats from './Stats';
import Battle from './Battle';
import Feats from './Feats';

class TabLists extends Component {
  render(){
    return(
      <div>
        <Tabs>
          <TabList>
            <Tab>Skills</Tab>
            <Tab>Stats</Tab>
            <Tab>Battle</Tab>
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
