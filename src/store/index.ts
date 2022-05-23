import { legacy_createStore as createStore, applyMiddleware,  Store } from "redux"
import RootReducer from "./ducks/RootReducer"
import { SerieState } from "./ducks/serie/types";
import { UserState } from "./ducks/users/types"

interface AppStoreState {
    user: UserState,
    serie: SerieState
}

const store: Store<AppStoreState> = createStore(RootReducer);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store