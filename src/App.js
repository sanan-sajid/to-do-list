import { useState } from "react";
import "./App.css";
import "react-bootstrap";

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
          className="form-control"
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button className="btn btn-success" onClick={addTask}>
          Add Task
        </button>
      </div>

      <div className="list">
        {toDoList.map((task, key) => {
          return (
            <div className="d-flex">
           <div className="text-center">
              <h1 className="task" key={key}>
                {key + 1}.{task}
              </h1>
</div>
              <button
              
                className="btn btn-danger ml-2"
                onClick={() => handleDelete(key)}
              >
                X
              </button>
          
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
