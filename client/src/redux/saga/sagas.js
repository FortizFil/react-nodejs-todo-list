import { call, put, takeLatest } from "redux-saga/effects";
import { fetchSuccess, setIsLoading } from "../todos";
import { fetchData } from "../../Api";
import { sagaActions } from "./sagaAcions";

function* fetchTodos() {
  yield put(setIsLoading(true));
  try {
    let result = yield call(fetchData);
    yield put(fetchSuccess(result));
    yield put(setIsLoading(false));
  } catch (e) {
    console.log(e);
    yield put(setIsLoading(false));
  }
}

function* mySaga() {
  yield takeLatest(sagaActions.FETCH_TODOS, fetchTodos);
}

export default mySaga;
