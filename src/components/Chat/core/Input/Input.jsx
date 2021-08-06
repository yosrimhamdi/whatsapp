import React, { useState } from 'react';

import './Input.sass';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { IconButton } from '@material-ui/core';
import messages from '../../../../api/messages';

const Input = () => {
  const [value, setValue] = useState('');

  const onInputChange = e => {
    setValue(e.target.value);
  };

  const onInputKeyPress = async e => {
    if (e.charCode === 13) {
      await messages.post('/', { content: value });

      setValue('');
    }
  };

  return (
    <div className="input">
      <IconButton>
        <InsertEmoticonIcon />
      </IconButton>
      <input
        onChange={onInputChange}
        onKeyPress={onInputKeyPress}
        type="text"
        placeholder="Type a message"
        className="input__input"
        value={value}
      />
      <IconButton>
        <MicIcon />
      </IconButton>
    </div>
  );
};

export default Input;
