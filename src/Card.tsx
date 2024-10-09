import React from 'react';
import './App.scss';
import { Big } from './Lisini.style';

interface CardT {
  token: string;
  text: string;
}

const Card: React.FC<CardT> = ({ token, text }) => {
  return (
    <div>
      <Big>{token}</Big>
      {text}
    </div>
  );
};

export default Card;
