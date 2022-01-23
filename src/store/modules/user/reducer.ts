import {Reducer} from 'redux';
import {IUserState, IUser} from './types';

const INITIAL_STATE = {} as IUserState;

const user: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GOOGLE_LOGIN': {
      return (state = action.payload);
    }
    case 'GOOGLE_LOGOUT': {
      return (state = {user: {} as IUser});
    }

    default:
      return state;
  }
};

export default user;
