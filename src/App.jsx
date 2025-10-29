import { useState } from 'react'
import './App.css'
import Name from './components/Name'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (name, date, desc) => {
    const newTodo = {
      id: Date.now(), // ✅ Fixed here — use Date.now() instead of date.Now()
      name,
      date,
      desc,
      status: false
    };

    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const handleStatus = (id) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(newTodo);
  };

  return (
    <>
      <Name />
      <AddTodo onAdd={handleAdd} />
      <Todos onDelete={handleDelete} todos={todos} onDone={handleStatus} />
    </>
  );
}

export default App;
