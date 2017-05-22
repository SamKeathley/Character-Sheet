import React, {Component} from 'react';

class Attributes extends Component {
  render(){
    return(
      <div>
      <form className="AttributesForm" action="" method="post">
        <input type="text" name="str" placeholder="Race"/>
        <input type="text" name="str" placeholder="Class"/>
        <input type="text" name="str" placeholder="Alignment"/>
      </form>
      </div>
    )
  }
}

export default Attributes;
