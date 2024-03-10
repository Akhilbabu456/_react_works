import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
      showAlert("Dark Mode enabled", "success")
    }else{
      setMode("light")
      document.body.style.backgroundColor ="white"
      document.body.style.color = "#042743"
      showAlert("Light Mode enabled", "success")
    }
  }
  return (
    <>
   <Navbar title="TextUtils" mode={mode} toggleMode= {toggleMode}/> 
   <Alert alert={alert}/>
   <div className="container my-3">
   <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
   </div>

    </>
  )
}

export default App;
