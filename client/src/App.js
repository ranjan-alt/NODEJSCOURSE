import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/task")
      .then((res) => setUsers(res.data));
  }, []);
  return <div className="App"></div>;
}

export default App;
