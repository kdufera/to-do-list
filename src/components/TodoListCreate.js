import React from "react";
import TodoListForm from "./TodoListForm";
import { createTodoList } from "../actions";
import { connect } from "react-redux";

class TodoListCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createTodoList(formValues);
    }
    render() {
        return (
            <div>
                ToDoList create
                <TodoListForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};

export default connect(null, { createTodoList })(TodoListCreate);