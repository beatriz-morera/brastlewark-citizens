import React from 'react';

import { Input } from 'antd';

const { Search } = Input;

const Filter = ({ onSearch }) => {
  return (
    <div className="filter-container">
      <Search
        placeholder="search citizents by name"
        onSearch={onSearch}
        size="large"
        enterButton
      />
    </div>
  );
};

export default Filter;
