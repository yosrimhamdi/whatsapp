import React from 'react';

import './Header.sass';

export const Header = () => {
  return (
    <div className="header">
      <img
        src="//via.placeholder.com/150x150"
        className="header__user-image"
        alt="user iamge"
      />
      <div className="header__icon-container">
        <div className="header__icon"></div>
        <div className="header__icon"></div>
        <div className="header__icon"></div>
      </div>
    </div>
  );
};

export default Header;
