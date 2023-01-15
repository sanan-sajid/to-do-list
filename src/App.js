import { useState } from "react";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputValue !== "") {
      addTask();
    }
  };
  const addTask = () => {
    if (inputValue !== "") {
      setToDoList([...toDoList, inputValue]);
    }
  };

  const handleDelete = (index) => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDoList(newToDoList);
  };
  return (
    <div className="App">
      <div className="addTask">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="list">
        {toDoList.map((task, key) => {
          return (
            <div>
              <h1 key={key}>{task}</h1>
              <button onClick={() => handleDelete(key)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
