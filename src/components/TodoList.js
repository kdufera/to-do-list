import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


import {
    fetchTodoLists,
    deleteTodoList,
    updateCompletedFlag
} from "../actions";

class TodoList extends React.Component {

    componentDidMount() {
        this.props.fetchTodoLists();
    }

    removeTodoListItem(id) {
        this.props.deleteTodoList(id);
    }
    
    activateTaskCompletionStatus(data) {
        data.isCompleted = true;
        this.props.updateCompletedFlag(data);
    }

    deactivateTaskCompletionStatus(data) {
        data.isCompleted = false;
        this.props.updateCompletedFlag(data);
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
            <List sx={{ width: '100%', maxWidth: 800 }}>
                <ListItem>
                    <ListItemAvatar>
                        {this.renderCheckBoxType(listData)}
                    </ListItemAvatar>
                    <ListItemText primary={listData.description} />
                    <ListItemAvatar>
                        <div>
                            <IconButton tooltip="Description here" style={noPointer}>
                                <DeleteForeverIcon
                                    onClick={() => this.removeTodoListItem(listData.id)}
                                    style={noPointer}
                                />
                            </IconButton>
                        </div>
                    </ListItemAvatar>
                </ListItem>
            </List>
        );
    }

    renderCheckBoxType(listData) {
        if (!listData.isCompleted) {
            return (
                <Box>
                    <Icon
                        onClick={() => this.activateTaskCompletionStatus(listData)}
                        sx={{ fontSize: 30 }}>radio_button_unchecked
                    </Icon>
                </Box>
            );
        }
        return (
            <Box>
                <Icon
                    onClick={() => this.deactivateTaskCompletionStatus(listData)}
                    sx={{ fontSize: 30 }}>task_alt
                </Icon>
            </Box>
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