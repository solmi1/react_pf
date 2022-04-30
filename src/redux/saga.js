import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { getFlickr } from './api';
import * as types from './actionType';

export default function* rootSaga() {
	yield all([fork(callFlickr)]);
}

export function* callFlickr() {
	yield takeLatest(types.FLICKR.start, returnFlickr);
}
export function* returnFlickr(action) {
	try {
		const response = yield call(getFlickr, action.opt);
		yield put({
			type: types.FLICKR.success,
			payload: response.data.photos.photo,
		});
	} catch (err) {
		yield put({ type: types.FLICKR.error, payload: err });
	}
}
