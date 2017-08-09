import React, {Component} from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      editMode: false
    };
    this.toggleEditMode= this.toggleEditMode.bind(this);
  }

  render(){


    return(
        <div className="header row justify-content-between">
          <div className="col-1">
            <span><i className="fa fa-arrow-left fa-lg" aria-hidden="true"></i></span>
          </div>
          <div className="col-6">
            <h3>Player Name</h3>
          </div>
          <div className="col-1">
            <span onClick={this.toggleEditMode}><i className="fa fa-pencil fa-lg" aria-hidden="true"></i></span>
            {this.state.editMode ? (
              <div>Edit Mode</div>
            ) : (
              <div>Read Mode</div>
            )}
          </div>
        </div>
    );
  }

  toggleEditMode(){
    this.setState({
      editMode: !this.editMode
    })
    console.log('Did it');
  }
}

export default Header;
