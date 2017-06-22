import React from 'react';
import Board from './Board';
import Result from './Result';
import './main.css';

const TicTacToePage = () => {
  return (
    <div className="app">
      <Board />
      <Result />
    </div>
  );
}

export default TicTacToePage;
