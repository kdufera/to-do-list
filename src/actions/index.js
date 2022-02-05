import {
    CREATE_TODO_LIST,
    FETCH_TODO_LISTS,
    DELETE_TODO_LIST,
    UPDATE_IS_COMPLETED_FLAG
     
} from "./types";

import todoLists from '../api/TodoLists';
import history from '../history';


export const createTodoList = formValues => async (dispatch) => {
    const response = await todoLists.post('/list', { ...formValues, isCompleted: false });
    dispatch({
        type: CREATE_TODO_LIST,
        payload: response.data
    }
    );
    history.push('/');
};

export const fetchTodoLists = () => async dispatch => {
    const response = await todoLists.get('/list');
    dispatch({
        type: FETCH_TODO_LISTS,
        payload: response.data
    });
};

export const deleteTodoList = (id) => async dispatch => {
    todoLists.delete(`/list/${id}`);
    dispatch({
        type: DELETE_TODO_LIST,
        payload: id
    });
};

export const updateCompletedFlag = (newListData) => async dispatch =>  {
    console.log(newListData.id)
    const response = await todoLists.patch(`/list/${newListData.id}`, newListData);
    dispatch({
        type: UPDATE_IS_COMPLETED_FLAG,
        payload: response.data
    });
}





