import React from 'react';

import './SideBar.sass';
import Header from './helpers/Header/Header';
import Search from './helpers/Search/Search';

const SideBar = () => (
  <div class="side-bar">
    <Header />
    <Search />
  </div>
);

export default SideBar;
