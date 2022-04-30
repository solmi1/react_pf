import { combineReducers } from 'redux';
import * as types from './actionType';

const flickrReducer = (state = { flickr: [] }, action) => {
	switch (action.type) {
		case types.FLICKR.start:
			return { ...state };

		case types.FLICKR.success:
			return { ...state, flickr: action.payload };

		case types.FLICKR.error:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

const reducers = combineReducers({
	flickrReducer,
});

export default reducers;
