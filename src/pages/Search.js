import React from 'react';
import { Link } from 'react-router-dom';
import { List, Avatar } from 'antd';

import { useFilteredCitizens } from '../hooks';

import Filter from '../components/Filter';

const Search = () => {
  const [searchedCitizen, filterCitizen] = useFilteredCitizens();
  return (
    <div className="search-page-container">
      <Filter onChange={filterCitizen} />
      <section className="list-container">
        <List
          loading={searchedCitizen.length === 0}
          itemLayout="horizontal"
          dataSource={searchedCitizen.slice(0, 100)}
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
