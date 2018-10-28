import React from "react";

const Header = props => {
  const listIcon = () => {
    return (
      <button className="btn" onClick={props.handleClick}>
        <i className="fa fa-bars" /> List
      </button>
    );
  };

  const gridIcon = () => {
    return (
      <button className="btn" onClick={props.handleClick}>
        <i className="fa fa-th-large" />
        Grid
      </button>
    );
  };

  return (
    <nav>
      <ul className="navigation-list">
        <li className="navigation-title">
          <h1 className="title">Marvel characters</h1>
        </li>
        <li className="icon-btn">
          {props.changeList ? listIcon() : gridIcon()}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
