// App.jsx
import { useRef, useState } from 'react';
import './App.css';

function App() {

  // Reference to be able to trace text from the input.
  const inputRef = useRef();

  // State array to hold our tasks.
  const [todos, setTodos] = useState([]);

  // Handle inserting new task.
  const handleInputTodo = () => {
    const task = inputRef.current.value;
    const item = { task, completed: false };
    setTodos([...todos, item]);
    inputRef.current.value = "";
  };

  // Handle finishing a task.
  const handleTaskDone = (indx) => {
    const newTodoes = [...todos];
    newTodoes[indx].completed = !newTodoes[indx].completed;
    setTodos(newTodoes);
  };

  // Handle deleting a task.
  const handleDeleteItem = (indx) => {
    const newTodos = [...todos];
    newTodos.splice(indx, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <div className='todo-insert'>
        <input ref={inputRef} placeholder='Enter a task'></input>
        <button onClick={handleInputTodo}>ADD</button>
      </div>
      <hr className='hr0'></hr>
      <div className='todo-show'>
        <ul>
          {todos.map((item, indx) => {
            return (
              <li key={indx} className={`todo-item ${item.completed ? 'done' : 'none'}`}>
                <span onClick={() => handleTaskDone(indx)} className='task'>
                  {item.task}
                </span>
                <span onClick={() => handleDeleteItem(indx)} className='x'>❎</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;