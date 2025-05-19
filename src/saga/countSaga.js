import {put, takeEvery} from 'redux-saga/effects';
import {ASYNC_DECREMENT, ASYNC_INCREMENT, decrementCreator, incrementCreator} from "../store/countReducer";

const delay = ms => new Promise(res => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCreator());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decrementCreator());
}

// первым параметром передаем тип экшена, за которым надо следить, а вторым параметром воркер
// который должен отрабатывать, когда экшен с таким типом, который мы передали первым параметром будет задеспатчен
export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker)
  yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}