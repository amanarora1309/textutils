import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", 'Success');
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", 'Success');
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Clear Text", 'Success');
    }
    const handleCopy = () => {
        // let text = document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Cilipboard", 'Success');
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", 'Success');
    }
    const handleOnchange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here")
  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="my-3">
                <textarea name="myBox" id="myBox" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'rgb(6 66 98)':'white',color: props.mode==='dark'?'white':'black'}} rows="8" className='form-control'></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element =>{return element.length !== 0})).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element =>{return element.length !== 0})).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the textbox above to preview here'}</p>
        </div>
    </>
  )
}
