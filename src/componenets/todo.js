import React from 'react';
import {List,ListItem,ListItemText,ListItemAvatar} from '@mui/material';

function Todo(props) {
  return (
    <List>
        <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItemText primary="Todo" secondary={props.text}/>
        </ListItem>
    </List>
    // <div>
    // <li>{props.text}</li>
    // </div>
  )
}

export default Todo;