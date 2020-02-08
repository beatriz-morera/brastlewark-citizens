import React from 'react';

import { Link } from 'react-router-dom';

const InfoCard = ({ thumbnail, name, age, weight, height, id }) => {
  return (
    <Link to={`/search/${id}`}>
      <div className="card-container">
        <div className="card">
          <div className="image-container">
            <img className="image" src={thumbnail} alt={name} />
          </div>
          <section className="details-container">
            <h4 className="citizen-name">{name}</h4>
            <ul>
              <li className="details">
                <span className="details-title">age:</span> {age}
              </li>
              <li className="details">
                <span className="details-title">weight:</span> {weight}
              </li>
              <li className="details">
                <span className="details-title">height:</span> {height}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Link>
  );
};

export default InfoCard;
