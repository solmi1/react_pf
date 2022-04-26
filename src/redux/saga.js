import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { getFlickr, getYoutube } from './api';
import * as types from './actionType';
import { type } from '@testing-library/user-event/dist/type';

export default function* rootSaga() {
	yield all([fork(callFlickr), fork(callYoutube)]);
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

export function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}
export function* returnYoutube() {
	try {
		const response = yield call(getYoutube);
		yield put({ type: types.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.error, payload: err });
	}
}
