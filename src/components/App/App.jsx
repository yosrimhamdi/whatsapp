import React from 'react';

import './App.sass';
import SideBar from '../SideBar/SideBar';
import Chat from '../Chat/Chat';

const App = () => {
  return (
    <div className="app">
      <SideBar />
      <Chat />
    </div>
  );
};

export default App;
