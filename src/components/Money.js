import React, {Component} from 'react';
import '../css/Money.css';

class Money extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form className="MoneyForm" action="" method="post">
              <input type="number" name="Gold" placeholder="Gold" /><p>Currency</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Money;
