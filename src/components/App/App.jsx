import React, { useEffect } from 'react';
import Pusher from 'pusher-js';

import './App.sass';
import SideBar from '../SideBar/SideBar';
import Chat from '../Chat/Chat';

const App = () => {
  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher('8017a44ac3256ec6cd6d', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('messages');

    channel.bind('inserted', data => {
      console.log(data);
    });
  }, []);

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
