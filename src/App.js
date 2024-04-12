
import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js'
import React, { useState } from 'react'
import Alert from './Components/Alert.js';
// import About from './Components/About.js';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // let darkBtn = document.getElementById("dark");
  // let redBtn = document.getElementById("red");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "success");

    }
  }
  return (
    // <Router>
    <>
      <Navbar title="TextUtils2" about="About Text" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text analyze below" />} />
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text analyze below" />
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
