import { UsersTypes } from "./types";


export const userLoginRequest = () => ({
    type: UsersTypes.LOGIN_REQUEST,
  });

export const userLogin = (data: []) => ({
  type: UsersTypes.LOGIN,
  payload: {
      data: data
  }
});

export const userLout = () => ({
    type: UsersTypes.LOGOUT,
});

export const loginFailure = (err: string) => ({
    type: UsersTypes.FAILURE,
    payload: {
        erro: err
    }
});