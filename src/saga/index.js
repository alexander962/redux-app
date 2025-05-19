import {all} from 'redux-saga/effects';
import {countWatcher} from "./countSaga";
import {userWatcher} from "./userSaga";

export function* rootWatcher() {
  // all - позволяет объединить несколько вотчеров
  yield all([countWatcher(), userWatcher()])
}