import React from 'react';

import './Search.sass';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => (
  <div className="search">
    <div className="search__content">
      <SearchIcon />
      <input
        className="search__input"
        placeholder="Search or start a new chat"
        type="text"
      />
    </div>
  </div>
);

export default Search;
