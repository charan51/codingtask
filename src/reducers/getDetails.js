import types from '../constants/actionTypes';
import initialState from '../constants/initialState';
export function getDetils(state = initialState, action) {
    switch (action.type) {
        case types.GET_USER_DETAILS_FETCHING:
            return { ...state, fetching: true };
        case types.GET_USER_DETAILS:
            return { ...state, employeeDeails: action.payload, fetching: false, fetched: true };
        case types.GET_USER_DETAILS_FETCHED:
            return { ...state, fetched: true, fetching: false };
        case types.GET_USER_DETAILS_ERROR:
            return { ...state, error: action.error, fetching: false }
        default:
            return state;
    };
}