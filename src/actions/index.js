import types from '../action_types';
const makeYourMove = (rowIndex, columnIndex, xo) => (dispatch) =>  {
  dispatch({
    type: types.MARK_MOVE,
    xo,
    rowIndex,
    columnIndex
  });
};

export {
  makeYourMove
};
