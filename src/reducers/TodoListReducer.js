import _ from 'lodash';
import {
    CREATE_TODO_LIST,
    FETCH_TODO_LISTS,
    DELETE_TODO_LIST,
    UPDATE_IS_COMPLETED_FLAG

} from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
        case CREATE_TODO_LIST:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_TODO_LISTS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case DELETE_TODO_LIST:
            return _.omit(state, action.payload);
        case UPDATE_IS_COMPLETED_FLAG:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};