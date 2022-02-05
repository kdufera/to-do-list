import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import TodoListReducer from "./TodoListReducer";


export default combineReducers({
   form: formReducer,
   list: TodoListReducer
});

