import { AnyAction } from 'redux'
import { Reducer } from 'redux';
import { SerieState, SerieTypes, Serie } from './types';


const initialState: SerieState = {
    data: undefined,
};

export const serieReducer: Reducer<SerieState, AnyAction> = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SerieTypes.ADD:
        return { ...state,
          
          data: {
            ...action.payload
          }
        };

        case SerieTypes.REMOVE:
        return { ...state,
          
          data: {
          }
        };
    default:
      return state;
  }

}