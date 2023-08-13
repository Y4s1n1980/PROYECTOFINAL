import React from 'react';
import './card.css';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="content">{content}</p>
    </div>
  );
};

export default Card;


