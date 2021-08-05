import React from 'react';
import classnames from 'classnames';

import './Message.sass';

const Message = ({ message: { content, createdAt } }) => {
  const className = classnames({
    // 'message--sender': sender,
    'message': true,
  });

  return (
    <div className={className}>
      <h5 className="message__user-name">YOSRI</h5>
      <div className="message__details">
        <p className="message__content">{content}</p>
        <p className="message__date">{createdAt}</p>
      </div>
    </div>
  );
};

export default Message;
