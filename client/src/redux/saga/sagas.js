import { call, put, takeLatest, all } from "redux-saga/effects";
import { fetchSuccess, setIsLoading, fetchError } from "../todos";
import { fetchData } from "../../Api";
import { sagaActions } from "./sagaAcions";

function* fetchTodos() {
  yield put(setIsLoading(true));
  try {
    let result = yield call(fetchData);
    yield put(fetchSuccess(result));
    yield put(setIsLoading(false));
  } catch (e) {
    yield put(fetchError(e.message));
    yield put(setIsLoading(false));
  }
}

function* fetchTodosSaga() {
  yield takeLatest(sagaActions.FETCH_TODOS, fetchTodos);
}

export default function* rootSaga() {
  yield all([fetchTodosSaga()]);
}
