import React from 'react';
import classnames from 'classnames';

import './Message.sass';

const Message = ({ userName, content, date, mine }) => {
  const className = classnames({
    'message--mine': mine,
    'message': true,
  });

  return (
    <div className={className}>
      <h5 className="message__user-name">{userName}</h5>
      <div className="message__details">
        <p className="message__content">{content}</p>
        <p className="message__date">{date}</p>
      </div>
    </div>
  );
};

export default Message;
