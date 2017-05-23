import React, {Component} from 'react';

class Money extends Component {
  render(){
    return(
      <div>
      <form className="MoneyForm" action="" method="post">
        <input type="number" name="Gold" placeholder="Gold" /><p>Currency</p>
      </form>
      </div>
    )
  }
}

export default Money;
