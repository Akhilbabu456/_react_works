import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }
    const handleClearClick = ()=>{
        let newText = ""
        setText(newText)
        props.showAlert("Text cleared!", "success")
    }
    const handleOnChange = (event)=>{
        // console.log("on change clicked")
        setText(event.target.value)
    }
    const handleCopy = ()=>{
        const text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard!", "success")
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }

    const[text, setText] = useState("")

  return (
    <>
      <div className='container my-4'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="light"? "white" : "#042743" ,color: props.mode==="light" ? "black" : "white"}} id="myBox" rows="8"></textarea>
      </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h2>Content Preview:</h2>
        <p>{text.length>0 ? text: "Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  )
}

TextForm.propTypes= {
    heading: PropTypes.string.isRequired
}
