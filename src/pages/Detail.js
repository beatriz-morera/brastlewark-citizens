import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContextCitizens } from '../hooks';
import { Avatar, List } from 'antd';

const Detail = () => {
  const { id } = useParams();
  const citizens = useContextCitizens();
  const citizen = useMemo(
    () => citizens.find(c => id && c.id === parseInt(id)),
    [citizens, id]
  );
  const friends = useMemo(
    () =>
      citizen && citizen.friends
        ? citizen.friends.map(name => citizens.find(f => f.name === name))
        : [],
    [citizen, citizens]
  );

  return (
    <div className="deatail-page-container">
      {citizen && (
        <section className="detail-page-container">
          <div>
            <Avatar size={250} src={citizen.thumbnail} />
            <div className="detail-page-basic-info-container">
              <h3 className="citizen-name">{citizen.name}</h3>
              <ul>
                <li className="detail-page-info">
                  <span className="details-title">age: </span> {citizen.age}
                </li>
                <li className="detail-page-info">
                  <span className="details-title">weight: </span>{' '}
                  {citizen.weight}
                </li>
                <li className="detail-page-info">
                  <span className="details-title">height: </span>{' '}
                  {citizen.height}
                </li>
                <li className="detail-page-info">
                  <span className="details-title">hair color: </span>
                  {citizen.hair_color}
                </li>
              </ul>
            </div>
          </div>
          <div className="detail-page-extra-info-container">
            <div className="detail-page-extra-info">
              <h3 style={{ margin: '16px 0', fontWeight: '600' }}>
                Professions
              </h3>
              {citizen.professions.length ? (
                <List
                  size="small"
                  itemLayout="horizontal"
                  dataSource={citizen.professions}
                  renderItem={p => <List.Item>{p}</List.Item>}
                />
              ) : (
                <p style={{ color: 'red' }}>There are no professions to show</p>
              )}
            </div>
            <div className="detail-page-extra-info">
              <h3 style={{ margin: '16px 0', fontWeight: '600' }}>Friends</h3>
              <div className="friends-info-container-container">
                <ul className="friends-info-container">
                  {citizen.friends.length ? (
                    friends.map(friend => (
                      <li className="friend-info" key={friend.id}>
                        <Avatar size={70} src={friend.thumbnail} />
                        <Link
                          to={`/search/${friend.id}`}
                          style={{
                            marginTop: '15px'
                          }}
                        >
                          {friend.name}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <p style={{ color: 'red' }}>
                      This citizen does not have any friends
                    </p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Detail;
