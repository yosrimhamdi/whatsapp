import React from 'react';

import './Messages.sass';
import Message from '../Message/Message';

export const Messages = () => (
  <div className="messages">
    <Message
      userName="yosri mhamdi"
      content="hey guys"
      date="Fri, 04 Sep 2020 18:00:16 GMT"
    />
    <Message
      userName="yosri mhamdi"
      content="hey guys"
      date="Fri, 04 Sep 2020 18:00:16 GMT"
      sender
    />
  </div>
);

export default Messages;
