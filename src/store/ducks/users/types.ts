/**
 * Action types
 */
export enum UsersTypes {
    LOGIN = '@users/LOGIN',
    LOGOUT = "@users/LOGOUT",
    FAILURE = "@users/FAILURE",
    LOGIN_REQUEST = "@users/LOGIN_REQUEST"
}
  
  /**
   * Data types
   */
  export interface User {
    email: string
    password: string
  }
  
  /**
   * State type
   */

  export interface UserState {
    readonly data: User | null
    readonly logged: boolean
    readonly error: string
}