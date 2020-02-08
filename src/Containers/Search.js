import React from 'react';
import { Link } from 'react-router-dom';
import { List, Avatar } from 'antd';

import { useData } from '../hooks';

import Filter from '../components/Filter';

const Search = () => {
  const { searchCitizen, filterCitizen } = useData();
  return (
    <div className="search-page-container">
      <Filter onSearch={filterCitizen} />
      <section className="list-container">
        <List
          itemLayout="horizontal"
          dataSource={searchCitizen.slice(0, 28)}
          renderItem={citizen => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={citizen.thumbnail} />}
                title={citizen.name}
              />
              <div>
                <Link to={`/search/${citizen.id}`}>View</Link>
              </div>
            </List.Item>
          )}
        />
      </section>
    </div>
  );
};

export default Search;
