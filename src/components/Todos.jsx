import React from 'react'
import Todo from './Todo'

const Todos = ({ todos, onDelete, onDone }) => {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            date={todo.date}
            desc={todo.desc}
            status={todo.status}
            onDelete={onDelete}
            onDone={onDone}
          />
        ))
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
};

export default Todos;
