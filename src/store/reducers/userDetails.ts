import { Action } from 'types/store';

const initialState = {};

const userDetailsReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    default: {
      return state;
    }
  }
};

export default userDetailsReducer;
