import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Messages.sass';
import Message from '../Message/Message';

export const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:3001/api/v1/messages');

      setMessages(response.data.messages);
    })();
  }, []);

  const rendredMessages = messages.map(message => (
    <Message key={message._id} message={message} />
  ));

  return <div className="messages">{rendredMessages}</div>;
};

export default Messages;
