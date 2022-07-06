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
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo : doc.data().todo, addedOn: doc.data().addedOn})))
    });
    console.log(todos);
  }, [])
  

  const addTodos = (event) => {
    // Using spread operator to actually not erase whatever is already in the list
    var date = new Date();
    const dd = String(date.getDate()).padStart(2,'0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();
    date = dd + '/' + mm + '/' + yyyy;

    event.preventDefault(); // it will stop REFRESH when submitted
    db.collection('todos').add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),
      addedOn : date
    })
    setInput(''); // clear up the input after adding new TODO 
  }
  // we use form to be able to submit using enter
  return (
    <div className="App">
      <h1>Hello ToDos!</h1>
      <form> 
        <input value = {input} onChange={event => setInput(event.target.value)}/>
        <Button disabled = {!input} type="submit" onClick = {addTodos} variant="contained">
          Add Task
        </Button>
        {/* <button type = "submit" onClick = {addTodos}>Add Task</button> */}
      </form>
      
      <ul>
        {todos.map( todo => (
          <Todo todo = {todo}/>
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
