import React from 'react';

import './App.sass';
import SideBar from '../SideBar/SideBar';
import Chat from '../Chat/Chat';

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default App;
