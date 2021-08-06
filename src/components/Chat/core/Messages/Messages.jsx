import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';

import messagesApi from '../../../../api/messages';

import './Messages.sass';
import Message from '../Message/Message';

export const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const pusher = new Pusher('8017a44ac3256ec6cd6d', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('messages');

    channel.bind('inserted', message => {
      setMessages([...messages, message]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  useEffect(() => {
    (async () => {
      const response = await messagesApi.get('/');

      setMessages(response.data.messages);
    })();
  }, []);

  const rendredMessages = messages.map(message => (
    <Message key={message._id} message={message} />
  ));

  return <div className="messages">{rendredMessages}</div>;
};

export default Messages;
