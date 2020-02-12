import React from 'react';

import { Input } from 'antd';

const { Search } = Input;

const Filter = ({ onChange }) => {
  return (
    <div className="filter-container">
      <Search
        placeholder="search citizents by name"
        onSearch={onChange}
        size="large"
        enterButton
      />
    </div>
  );
};

export default Filter;
