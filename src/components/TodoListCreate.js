import React from "react";
import TodoListForm from "./TodoListForm";
import { createTodoList } from "../actions";
import { connect } from "react-redux";

const TodoListCreate = (props) => {

    const mainDiv = { paddingTop: '60px', width: '480px', margin: '0 auto' };
    const onSubmit = (formValues) =>{
        props.createTodoList(formValues);
    }

    return (
        <div className="container" style={mainDiv}>
            <h3> Add a task description </h3>
            <hr></hr>
            <TodoListForm onSubmit={onSubmit} />
        </div>
    );
    
};

export default connect(null, { createTodoList })(TodoListCreate);
