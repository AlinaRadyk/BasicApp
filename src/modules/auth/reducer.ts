import { handleActions } from 'redux-actions';

import { setUser, logoutUser } from 'modules/auth/actions';
import { clearState } from 'modules/app/actions';

const email = 'test@gmail.com';

const initialState = {
  user: {
    email, username: email,
  },
};

export default handleActions(
  {
    [setUser]: (state, { payload }) => ({
      ...state,
      user: payload,
    }),
    [logoutUser]: state => ({
      ...state,
      token: null,
      user: null,
    }),
    [clearState]: () => ({
      ...initialState,
    }),
  },
  initialState,
);
