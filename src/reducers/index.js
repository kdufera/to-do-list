import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import todoListReducer from "./TodoListReducer";


export default combineReducers({
   form: formReducer,
   list: todoListReducer
});

