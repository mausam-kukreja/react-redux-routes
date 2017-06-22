const XOInRow = (xo, rowIndex) => rowIndex.filter(el => el === xo).length;
const XOInColumn = (xo, colNumber, ...rows) => rows.map(rowIndex => rowIndex[colNumber]).filter(el => el === xo).length;
const XOInLeftSlide = (xo, ...rows) => {
  const [row0, row1, row2] = rows;
  return [row0[0], row1[1], row2[2]].filter(el => el === xo).length;
};
const XOInRightSlide = (xo, ...rows) => {
  const [row0, row1, row2] = rows;
  return [row0[2], row1[1], row2[0]].filter(el => el === xo).length;
};
const hasRowCleared = (xo, rowIndex) => XOInRow(xo, rowIndex) === 3;
const hasColumnCleared = (xo, colNumber, ...rows) => XOInColumn(xo, colNumber, ...rows) === 3;
const hasLeftSlideCleared = (xo, ...rows) => XOInLeftSlide(xo, ...rows) === 3;
const hasRightSlideCleared = (xo, ...rows) => XOInRightSlide(xo, ...rows) === 3;
const calculateWinner = (xo, board) => {
  const rows = Object.keys(board).map(rowIndex => board[rowIndex]);
  return [
    { won: hasRowCleared(xo, board[0])},
    { won: hasRowCleared(xo, board[1])},
    { won: hasRowCleared(xo, board[2])},
    { won: hasColumnCleared(xo, 0, ...rows)},
    { won: hasColumnCleared(xo, 1, ...rows)},
    { won: hasColumnCleared(xo, 2, ...rows)},
    { won: hasLeftSlideCleared(xo, ...rows)},
    { won: hasRightSlideCleared(xo, ...rows)}
  ]
  .reduce((answer, nextCheck) => {
    return nextCheck.won ? nextCheck : answer;
  }, {won: false});
};



const initialBoardState = {
  0: ['', '', ''],
  1: ['', '', ''],
  2: ['', '', '']
};

const boardReducer = (state = initialBoardState, action) => {
  switch (action.type) {
    case 'MARK_MOVE':
      return state;
    default:
      return state;
  }
};



const initialStatusState = 'none';

const statusReducer = (state = initialTurnState, action) => {
  switch (action.type) {
    case 'MARK_MOVE': {
      ['x', 'o'].forEach(xo => {
        if (action.board.some(row => row.every(value => value === xo))) {
          return `winner-${xo}`;
        }
        if ([0, 1, 2].some(col => action.board.every(row => row[col] === xo))) {
          return `winner-${xo}`;
        }
        if ([0, 1, 2].every(i => action.board[`${i}`][i] === xo)) {
          return `winner-${xo}`;
        }
        if ([0, 1, 2].every(i => action.board[`${i}`][3 - i] === xo)) {
          return `winner-${xo}`;
        }
      });

      if (action.board.every(row => row.every(value => value.length > 0))) {
        return 'draw';
      }
    }
    return 'started';
    default:
      return state;
  }
};


const initialTurnState = 'o';

const turnReducer = (state = initialTurnState, action) => {
  switch (action.type) {
    case 'MARK_MOVE':
      return action.xo === 'o' ? 'x' : 'o';
    default:
      return state;
  }
};



export const initialState = {
  board: boardReducer(undefined, {}),
  status: statusReducer(undefined, {}),
  turn: turnReducer(undefined, {}),
};

export default (state = initialState, action) =>  {
  switch (action.type) {
    case 'MARK_MOVE': {
      const {xo, rowIndex, columnIndex} = action;
      const board = boardReducer(state.board, {}),

      return {
        board,
        status: statusReducer(state.status, { type: action.type, board }),
        turn: turnReducer(state.turn, { type: action.type, xo }),
      };
    }
    default:
      return state;
  }
};