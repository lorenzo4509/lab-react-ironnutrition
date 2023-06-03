import React from 'react';
import { Input } from 'antd';

const { Search: AntSearch } = Input;

const Search = ({ onSearch }) => {
  const handleSearch = (value) => {
    onSearch(value);
  };

  return (
    <div>
      <AntSearch
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search food"
      />
    </div>
  );
};

export default Search;
