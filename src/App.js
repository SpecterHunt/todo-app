import React, {useState, useEffect} from 'react'; 
import Button from '@mui/material/Button';
import './App.css';
import Todo from './componenets/todo';
import db from './fire';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

function App() {
  const [todos, setTodos] = useState([]);
  const [input,setInput] = useState('');

  // when the app loads we want to listen to database for todo and fetch them
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    });
  }, [])
  

  const addTodos = (event) => {
    // Using spread operator to actually not erase whatever is already in the list
    event.preventDefault(); // it will stop REFRESH when submitted
    db.collection('todos').add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(''); // clear up the input after adding new TODO 
  }
  // we use form to be able to submit using enter
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form> 
        <input value = {input} onChange={event => setInput(event.target.value)}/>
        <Button disabled = {!input} type="submit" onClick = {addTodos} variant="contained">
          Add Task
        </Button>
        {/* <button type = "submit" onClick = {addTodos}>Add Task</button> */}
      </form>
      
      <ul>
        {todos.map( todo => (
          <Todo text = {todo}/>
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
