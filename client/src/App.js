import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [citizenship, setCitizenship] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      citizenship: citizenship,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          citizenship: citizenship,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
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
      ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      <div className="employees">
        <button onClick={getEmployees}>Show Emplyees</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Citizenship: {val.citizenship}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Wage: {val.wage}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
