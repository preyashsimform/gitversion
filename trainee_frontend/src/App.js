import './App.css';
import axios from "axios";
import React, {useState} from "react";

function App() {
  const [text, setText] = useState("");
  axios.get("http://localhost:3002/",(req,res)=>setText(res.data))
  return (
    <div className="App">
      <header className="App-header">
        {text}
      </header>
    </div>
  );
}

export default App;
