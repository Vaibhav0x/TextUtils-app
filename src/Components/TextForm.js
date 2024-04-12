import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Clicked for Uppercase");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted in Uppercase","success")

    }
    const handleDownClick=()=>{
        // console.log("Clicked for lowecase");
        let lowerText=text.toLowerCase();
        setText(lowerText);
        props.showAlert("Text Converted in Lowercase","success")

    }
    const handleClearClick=()=>{
        let clearText='';
        setText(clearText);
        props.showAlert("Text Clear","success")

    }
    const handleCapClick=()=>{
        let capText=text.split(" ");
        for(let i=0;i<capText.length;i++){
            capText[i]=capText[i][0].toUpperCase()+capText[i].substring(1);
        }
        let newText=capText.join(" ");
        setText(newText);
        props.showAlert("Text Capitalized","success")

    }
    const handleCopy=()=>{
        let newText=document.getElementById('myBox')
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied","success")
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("In Text removes extra spaces more than one ","success");
    }
    const handleOnChange=(event)=>{
        // console.log("Click on Change");
        setText(event.target.value)
    }
    const [text,setText]=useState("Enter text here")
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear to Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Capital Case</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove WhiteSpace</button>



        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
