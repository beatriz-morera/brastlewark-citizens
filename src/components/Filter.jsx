import React, { useCallback } from 'react';
import { Input } from 'antd';

const { Search } = Input;

export default ({ onChange }) => {
  const handleChange = useCallback((text) => onChange && onChange(text), [onChange]);

  return (
    <div className="filter-container">
      <Search
        placeholder="search citizents by name"
        onSearch={handleChange}
        size="large"
        enterButton
        data-testid="searchbar"
      />
    </div>
  );
};
