import React from 'react'

const Todo = ({ id, name, date, desc, status, onDelete, onDone }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', borderRadius: '10px', marginBottom: '10px' }}>
      <h3>{name}</h3>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Description:</strong> {desc}</p>
      <p><strong>Status:</strong> {status ? "Done ✅" : "Pending ⏳"}</p>

      <button onClick={() => onDone(id)}>
        {status ? "Mark as Pending" : "Mark as Done"}
      </button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Todo;
