import _ from 'lodash';
import {
    CREATE_TODO_LIST,
    FETCH_TODO_LIST
} from "../actions/types";


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
        case CREATE_TODO_LIST:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};