import React from 'react';

import './Input.sass';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { IconButton } from '@material-ui/core';

const Input = () => (
  <div className="input">
    <IconButton>
      <InsertEmoticonIcon />
    </IconButton>
    <input type="text" placeholder="Type a message" className="input__input" />
    <IconButton>
      <MicIcon />
    </IconButton>
  </div>
);

export default Input;
