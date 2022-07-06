import React from 'react';
import {List,ListItem,ListItemText,ListItemAvatar,Button,Modal} from '@mui/material';
import db from '../fire';



function Todo(props) {
    // const updateTodo = () => {
    //     db.collection('todos').doc(props.todo.id).set({
    //         todo : input
    //     }, {merge: true});
    // }
  return (    

    <List>
        <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary={props.todo.addedOn}/>
        </ListItem>
        <Button onClick = {event => db.collection('todos').doc(props.todo.id).delete()}>Delete</Button>
    </List>
    // <div>
    // <li>{props.text}</li>
    // </div>
  )
}

export default Todo;