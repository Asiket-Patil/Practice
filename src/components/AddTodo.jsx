import React, { useState } from 'react'

const AddTodo = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');

  const handleAdd = () => {
    if (!name || !date || !desc) {
      alert("Please fill all fields");
      return;
    }

    onAdd(name, date, desc);
    console.log(name, date, desc);

    // ✅ Clear inputs after adding
    setName('');
    setDate('');
    setDesc('');
  };

  return (
    <div>
      <div className="todo-form">
        <input type="text" placeholder="Enter title" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="text" placeholder="Enter description" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button onClick={handleAdd}>Add Todo</button>
      </div>

    </div>
  );
};

export default AddTodo;
