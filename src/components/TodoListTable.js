import React, {useState} from "react";
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import {
    deleteTodoList,
    updateCompletedFlag
} from "../actions";


const TodoListTable = (props) => {

    const [removeFlag, setRemoveFlag] = useState(false);
    const listData = props.listData;

  const  activateTaskCompletionStatus = (data) => {
        data.isCompleted = true;
        props.updateCompletedFlag(data);
    }

   const deactivateTaskCompletionStatus = (data) => {
        data.isCompleted = false;
        props.updateCompletedFlag(data);
    }

    const renderCheckBoxType = (listData)=>{
        if (!listData.isCompleted) {
            return (
                <Box>
                    <Icon
                        onClick={() => activateTaskCompletionStatus(listData)}
                        sx={{ fontSize: 30 }}>radio_button_unchecked
                    </Icon>
                </Box>
            );
        }
        return (
            <Box>
                <Icon
                    onClick={() => deactivateTaskCompletionStatus(listData)}
                    sx={{ fontSize: 30 }}>task_alt
                </Icon>
            </Box>
        );
    }

   const removeTodoListItem = (id) => {
        props.deleteTodoList(id);
    }


    const noPointer = { cursor: 'default', fontSize: 33, color: 'red' };

    return (
        
        <List sx={{ width: '100%', maxWidth: 800 }}>
            <ListItem>
                <ListItemAvatar>
                    {renderCheckBoxType(listData)}
                </ListItemAvatar>
                <ListItemText primary={listData.description} />
                <ListItemAvatar>
                    <div>
                        <IconButton tooltip="Description here" style={noPointer}>
                            <DeleteForeverIcon
                                onClick={() => removeTodoListItem(listData.id)}
                                style={noPointer}
                            />
                        </IconButton>
                    </div>
                </ListItemAvatar>
            </ListItem>
        </List>
    );
};

export default connect(null, {deleteTodoList,
    updateCompletedFlag })(TodoListTable);


