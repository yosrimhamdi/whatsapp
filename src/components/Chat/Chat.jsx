import React from 'react';

import './Chat.sass';
import Header from './core/Header/Header';
import Messages from './core/Messages/Messages';

const Chat = () => (
  <div className="chat">
    <Header />
    <Messages />
  </div>
);

export default Chat;
