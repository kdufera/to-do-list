import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import TodoListTable from "./TodoListTable";

import {
    fetchTodoLists,
    deleteTodoList,
    updateCompletedFlag
} from "../actions";

class TodoList extends React.Component {

    componentDidMount() {
        this.props.fetchTodoLists();
    }

    renderTodoList() {
        const mainDiv = { textAlign: 'center', padding:'50px',   
        paddingTop: '40px', width: '480px', margin: '0 auto'};

        var size = Object.keys(this.props.list).length;
        if (size > 0) {
            return this.props.list.map(listData => {
                return (
                    <React.Fragment>
                        <div className="item" key={listData.id}>
                            <div style={{ display: 'inline-flex;' }} >
                                {this.formatTodoListTable(listData)}
                            </div>
                        </div>
                    </React.Fragment>
                );
            });
        }
        return (
            <div style={mainDiv}>
                <h4> You currently have 0 task on you to do list. Add a 
                    task by clicking on the green plus icon above!
                    </h4>
            </div>
        )
    }


    formatTodoListTable(listData) {

        const noPointer = { cursor: 'default', fontSize: 33, color: 'red' };
        return (
            <TodoListTable listData={listData} />
        );
    }

    render() {
        const noPointer = { cursor: 'default', fontSize: 28, color: 'green' };
        const mainDiv = { paddingTop: '60px', width: '480px', margin: '0 auto' }

        return (
            <div className="container" style={mainDiv}>
                <h3> Today </h3>
                <hr />
                <div style={{ textAlign: 'left' }}>
                    <Link to="/list/create" className="large middle aligned icon circle">
                        <div>
                            <IconButton tooltip="Description here" style={noPointer}>
                                <AddCircleIcon style={noPointer} />
                            </IconButton>
                        </div>
                    </Link>
                </div>

                <div style={{ paddingTop: '20px' }}>
                    {this.renderTodoList()}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        list: Object.values(state.list)
    };
};

export default connect(mapStateToProps,
    {
        fetchTodoLists,
        deleteTodoList,
        updateCompletedFlag
    })(TodoList);