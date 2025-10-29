import React from 'react'

const Todo = ({ id, name, date, desc, status, onDelete, onDone }) => {
  return (
    <div className={`todo-card ${status ? "done" : ""}`}>
      <div className="todo-content">
        <h2 className="todo-title">{name}</h2>
        <p className="todo-desc">{desc}</p>
        <p className="todo-date">📅 {date}</p>
        <p className="todo-status">
          Status: <span>{status ? "Done ✅" : "Pending ⏳"}</span>
        </p>
      </div>

      <div className="todo-actions">
        <button className="btn done-btn" onClick={() => onDone(id)}>
          {status ? "Mark Pending" : "Mark Done"}
        </button>
        <button className="btn delete-btn" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
