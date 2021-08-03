import React from 'react';

import './Header.sass';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

export const Header = () => {
  return (
    <div className="header">
      <img
        src="//via.placeholder.com/150x150"
        className="header__user-image"
        alt="user iamge"
      />
      <div className="header__icon-container">
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
