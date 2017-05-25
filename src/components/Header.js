import React from 'react';

const Header = () => {
    return(
        <div className="header row justify-content-between">
          <div className="col-1">
            <span><i className="fa fa-arrow-left fa-lg" aria-hidden="true"></i></span>
          </div>
          <div className="col-6">
            <h3>Player Name</h3>
          </div>
          <div className="col-1">
            <span><i className="fa fa-pencil fa-lg" aria-hidden="true"></i></span>
          </div>
        </div>
    );
}

export default Header;