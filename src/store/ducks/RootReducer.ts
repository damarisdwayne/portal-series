import { combineReducers } from 'redux';
import { serieReducer } from './serie';

import { userReducer } from './users';

export default combineReducers({
    user: userReducer,
    serie: serieReducer
});