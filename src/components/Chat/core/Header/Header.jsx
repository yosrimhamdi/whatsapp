import React from 'react';

import './Header.sass';
import Avatar from '../../../shared/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';

const Header = () => (
  <div className="chat-header">
    <Avatar />
    <div>
      <h1>dance room</h1>
      <p className="chat-header__last-seen">
        last seen Fri, 04 Sep 2020 18:00:16 GMT
      </p>
    </div>
    <div className="chat-header__icons">
      <IconButton>
        <SearchIcon />
      </IconButton>
      <IconButton>
        <AttachFileIcon />
      </IconButton>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
  </div>
);

export default Header;
