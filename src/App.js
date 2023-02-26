import React, { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([
    { id: 1, text: "Learn HTML", completed: false },
    { id: 2, text: "Learn CSS", completed: false },
    { id: 3, text: "Learn Javascript", completed: false },
    { id: 4, text: "Learn React.JS", completed: false },
    { id: 5, text: "Find a Job", completed: false },
  ]);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function addItem(e) {
    if (e.key === "Enter") {
      const newId =
        items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;

      setItems([...items, { id: newId, text: input, completed: false }]);
      setInput("");
    }
  }

  function toggleAllCompleted() {
    const allChecked = items.every((item) => item.completed);
    setItems(items.map((item) => ({ ...item, completed: !allChecked })));
  }

  function removeItem(index) {
    setItems(items.filter((item, i) => i !== index));
  }

  return (
    <div className="App">
      <h1 className="todos-text">todos</h1>
      <div className="notebookContainer">
        <div className="inputContainer">
          <button className="markAllCompleted" onClick={toggleAllCompleted}>
            ❯
          </button>
          <input
            className="enterItemInput"
            value={input}
            onChange={handleInput}
            onKeyDown={addItem}
            placeholder="Enter to do item..."
          />
        </div>
        <ToDoList items={items} setItems={setItems} removeItem={removeItem} />
        <Footer items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default App;
