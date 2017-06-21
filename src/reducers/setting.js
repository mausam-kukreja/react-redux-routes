import types from '../action_types';

const initialState = {
  loading: false,
  flash: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
