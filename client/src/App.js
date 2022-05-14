import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [citizenship, setCitizenship] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const addEmployee = () => {
    console.log(name);
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      citizenship: citizenship,
      position: position,
      wage: wage,
    }).then(() => {
      console.log("success!");
    });
  };

  return (
    <div className="App">
      <div className="Data">
        <label for="name">Name: </label>
        <input
          id="name"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        />
        <label for="age">Age: </label>
        <input
          id="age"
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
          required
        />
        <label for="citizenship">Citizenship: </label>
        <input
          id="citizenshiip"
          type="text"
          onChange={(event) => {
            setCitizenship(event.target.value);
          }}
          required
        />
        <label for="position">Position: </label>
        <input
          id="position"
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
          required
        />
        <label for="wage">Wage (yearly): </label>
        <input
          id="wage"
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
          required
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
