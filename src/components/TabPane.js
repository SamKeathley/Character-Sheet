import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Skills from './Skills';
import Stats from './Stats';
import Battle from './Battle';
import Feats from './Feats';
import '../css/TabPane.css';

class TabPane extends Component {
  render(){
    return(
          <Tabs>
            <TabList>
              <Tab>Skills</Tab>
              <Tab>Stats</Tab>
              <Tab>Battle</Tab>
              <Tab className="last">Feats/Spells</Tab>
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
    )
  }
}

export default TabPane;
