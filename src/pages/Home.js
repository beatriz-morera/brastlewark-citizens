import React from 'react';
import { List } from 'antd';

import InfoCard from '../components/InfoCard';

import { useContextCitizens } from '../hooks';

const Home = () => {
  const citizens = useContextCitizens();

  return (
    <section className="all-cards-container">
      <List
        dataSource={citizens}
        renderItem={citizen => (
          <List.Item>
            <InfoCard key={citizen.id} {...citizen} />
          </List.Item>
        )}
        grid={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        pagination={{
          size: 'small',
          defaultPageSize: 10,
          pageSizeOptions: ['10', '20', '30'],
          showSizeChanger: true
        }}
      />
    </section>
  );
};

export default Home;
