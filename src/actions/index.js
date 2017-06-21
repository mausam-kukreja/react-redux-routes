import types from '../action_types';
export const makeYourMove = (row, columnValue, xo) => ({
  type: types.MARK_MOVE,
  xo,
  row,
  columnValue
});

