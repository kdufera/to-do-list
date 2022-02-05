import {
    CREATE_TODO_LIST,
    FETCH_TODO_LIST
} from "./types";

import TodoLists from '../api/TodoLists';
import history from '../history';


export const createTodoList = formValues => async (dispatch) => {
    const response = await TodoLists.post('/list', { ...formValues, isCompleted: false });
    dispatch({
        type: CREATE_TODO_LIST,
        payload: response.data
    }
    );
    history.push('/');
};

