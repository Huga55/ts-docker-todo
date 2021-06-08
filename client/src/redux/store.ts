import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
    todo: todoReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


export default createStore(rootReducer);