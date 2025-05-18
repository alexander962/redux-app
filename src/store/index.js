import {createStore, combineReducers, applyMiddleware} from "redux";
import {userReducer} from "./userReducer";
import countReducer from "./countReducer";
import createSagaMiddleware from "redux-saga";
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  userReducer,
  countReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);