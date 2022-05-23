import { AnyAction } from 'redux'
import { Reducer } from 'redux';
import { UserState, UsersTypes } from './types';


const initialState: UserState = {
    data: {
      email: 'user@gmail.com',
      password: '123456'
    },
    logged: false,
    error: ''
};

export const userReducer: Reducer<UserState, AnyAction> = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case UsersTypes.LOGIN:
        return { ...state,
          
          data: {
            ...action.payload
          },
          logged: true,
           error: ''
        };

        case UsersTypes.LOGOUT:
        return { ...state,
          
          data: null,
          logged: false,
          error: ''
         
        };
        case UsersTypes.FAILURE:
        return { ...state,
          
          data: null,
          logged: false,
          error: action.payload.err
         
        };
    default:
      return state;
  }

}