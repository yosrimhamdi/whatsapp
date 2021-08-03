import React from 'react';

import Room from '../Room/Room';
import './Rooms.sass';

const Rooms = () => (
  <div className="rooms">
    <h1 className="rooms__add-new">add a new chat</h1>
    <Room title="dance" lastMessage="this is real time" />
    <Room title="dev" lastMessage="this is real time" />
    <Room title="epic" lastMessage="this is real time" />
  </div>
);

export default Rooms;
