import React, { Component } from 'react';
import Y from './Y';
import X from './X';
import O from './O';
import { makeYourMove } from '../../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Board extends Component {

  constructor(props) {
    super(props);
    this.makeYourMove = this.makeYourMove.bind(this);
  }

  makeYourMove (rowIndex, columnIndex, xo) {
    !this.props.won && this.props.makeYourMove(rowIndex, columnIndex, xo);
  }

  renderXO(rowIndex, columnIndex, xo) {
    if (xo === 'x') {
      return <X key={columnIndex} columnIndex={columnIndex} />;
    }
    if (xo === 'o') {
      return <O key={columnIndex} columnIndex={columnIndex} />;
    }
    return <Y key={columnIndex} row={rowIndex} col={columnIndex} makeYourMove={this.makeYourMove} turn={this.props.turn} />;
  }

  render() {
    return (
      <div className='board'>
        {
          Object.keys(this.props.board)
            .map(rowIndex => {
              return (
                <div className='row' key={rowIndex}>
                  {
                    this.props.board[rowIndex].map((xo, columnIndex) => {
                      return this.renderXO(rowIndex, columnIndex, xo);
                    })
                  }
                </div>
              );
            })
        }
      </div>
    );
  }
}
Board.propTypes = {
  board: PropTypes.object.isRequired,
  turn: PropTypes.string.isRequired,
  won: PropTypes.string,
  draw: PropTypes.bool.isRequired,
  makeYourMove: PropTypes.func.isRequired
};
export default connect(
  ({ tictacteo }) => {
    const {board, turn, won, draw} = tictacteo;
    return { board, turn, won, draw };
  },
  {
    makeYourMove,
  }
)(Board);