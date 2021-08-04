import React from 'react';

import './Chat.sass';
import Header from './core/Header/Header';
import Messages from './core/Messages/Messages';
import Input from './core/Input/Input';

const Chat = () => (
  <div className="chat">
    <Header />
    <Messages />
    <Input />
  </div>
);

export default Chat;
