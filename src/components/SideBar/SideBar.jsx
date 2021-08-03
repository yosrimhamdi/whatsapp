import React from 'react';

import './SideBar.sass';
import Header from './helpers/Header/Header';
import Search from './helpers/Search/Search';
import Rooms from './helpers/Rooms/Rooms';

const SideBar = () => (
  <div className="side-bar">
    <Header />
    <Search />
    <Rooms />
  </div>
);

export default SideBar;
