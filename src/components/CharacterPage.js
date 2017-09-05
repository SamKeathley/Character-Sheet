import React, {Component} from 'react';
import Header from './Header';
import TabPane from './TabPane';
import Points from './Points';
import Attributes from './Attributes';
import Money from './Money';
import '../css/CharacterPage.css';
import Betty from '../images/betty.png';
import HealthBar from './HealthBar';

class CharacterPage extends Component {
  constructor(props){
    super(props);
    this.state={
      character: {
        name: "Betty",
        lvl: "5"
    },
      editMode: false
    };
    this.toggleEditMode= this.toggleEditMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEditMode(){
    this.setState({
      editMode: !this.editMode
    })
    console.log('Did it');
  }

  handleChange(event) {
   this.setState({value: event.target.value});
 }

  render(){
    return(
      <div className="character-page container">
        <Header toggleEditMode={this.toggleEditMode} editMode={this.state.editMode} />
        <div className="avatar-section row">
          <div className="col-6">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Betty</h2>
                </div>
                <div className="col-12">
                  <img src={Betty} alt="avatar" />
                </div>
                <div className="col-12">
                  <HealthBar percent={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col">
                <Points />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Money />
              </div>
            </div>
          </div>
        </div>
        <div className="rest-of-the-page container">
          <div className="row">
            <div className="col">
              <Attributes />
            </div>
          </div>
          <div className="row">
            <div className="col well">
              <TabPane />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterPage;
