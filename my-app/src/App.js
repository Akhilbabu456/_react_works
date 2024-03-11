import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleMode = ()=>{
    if(mode ==="light"){
      setMode("dark")
      document.body.style.backgroundColor ="#042743"
      document.body.style.color = "white"
      document.title = "TextUtils - Dark Mode"
      showAlert("Dark Mode enabled", "success")
    }else{
      setMode("light")
      document.body.style.backgroundColor ="white"
      document.body.style.color = "#042743"
      document.title = "TextUtils - Light Mode"
      showAlert("Light Mode enabled", "success")
    }
  }
  return (
    <>
    <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode= {toggleMode}/> 
   <Alert alert={alert}/>
   <div className="container my-3">
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
    </Routes>
   </div>
   </Router>
    </>
  )
}

export default App;
