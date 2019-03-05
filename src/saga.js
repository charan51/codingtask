import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import types from './constants/actionTypes';
async function fetchDetails({ payload }) {
    const detalis =await  axios.get(`https://reqres.in/api/users/${payload}`);
    return detalis.data;
}
function* runSaga(data) {
    try {
        yield put({ type: types.GET_USER_DETAILS_FETCHING });
        const successData = yield call(fetchDetails, data);
        yield put({ type: types.GET_USER_DETAILS, payload: successData });
        yield put({ type: types.GET_USER_DETAILS_FETCHED });
    } catch (error) {
        yield put({ type: types.GET_USER_DETAILS_ERROR, error });
    }
}
export function* watcherSaga() {
    yield takeEvery(types.GET_EMPLOYEE_ID, runSaga)
}