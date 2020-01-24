import React from 'react';

const InfoCard = ({
  thumbnail,
  name,
  age,
  weight,
  height,
  hair_color,
  professions,
  friends
}) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="image-container">
          <img className="image" src={thumbnail} alt="citizen profile" />
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
            <li className="details">
              <span className="details-title">hair color:</span> {hair_color}
            </li>
            <li className="details">
              <span className="details-title">professions:</span> {professions}
            </li>
            <li className="details">
              <span className="details-title">friends:</span> {friends}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default InfoCard;
