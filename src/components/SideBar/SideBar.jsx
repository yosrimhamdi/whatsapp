import React from 'react';

import './SideBar.sass';
import Header from './core/Header/Header';
import Search from './core/Search/Search';
import Rooms from './core/Rooms/Rooms';

const SideBar = () => (
  <div className="side-bar">
    <Header />
    <Search />
    <Rooms />
  </div>
);

export default SideBar;
