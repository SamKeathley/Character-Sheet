import React from 'react';
import '../css/Money.css';
import Gold from '../images/Gold-icon.png'

const Money = ({money}) => {
  return(
    <div className="container">
      <div className="row">
        <form className="MoneyForm" action="" method="post">
        <img src={Gold} alt="money" className="goldPic" /><input type="number" name="Gold" placeholder="Gold" />
        </form>
      </div>
    </div>
  )
}

export default Money;
