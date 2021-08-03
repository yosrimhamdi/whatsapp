import React from 'react';
import Avatar from '../../../common/Avatar';

import './Room.sass';

const Room = ({ title, lastMessage }) => (
  <div className="room">
    <Avatar alt="room avatar" />
    <div>
      <h3 className="room__title">{title}</h3>
      <p>{lastMessage}</p>
    </div>
  </div>
);

export default Room;
