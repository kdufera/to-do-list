import React from "react";
import TodoListForm from "./TodoListForm";
import { createTodoList } from "../actions";
import { connect } from "react-redux";

class TodoListCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createTodoList(formValues);
    }
    render() {
        const mainDiv = {paddingTop: '60px', width: '480px', margin: '0 auto'};
        return (
            <div className="container" style={mainDiv}>
                <h3> Add a task description </h3>
                <hr></hr>
                <TodoListForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};

export default connect(null, { createTodoList })(TodoListCreate);