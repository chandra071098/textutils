import React,{useState} from 'react';
/**
 * 
 */
const Textform = (props) => {


    const handleOnLowClick=()=>{
        // console.log("On Click is intiated");
        const newText=text.toLowerCase();
        setText(newText);
        props.alert("Converted to Lower Case","success");
    }
    const handleOnUpClick=()=>{
        // console.log("On Click is intiated");
        const newText=text.toUpperCase();
        setText(newText);
        props.alert("Converted to Upper Case","success");
    }
    const handleOnChange=(event)=>{
        // console.log(event);
        setText(event.target.value);
        // console.log(text);
        // wordLength(event.target.value);

    }
    const handleClear=(event)=>{
        // console.log(event);
        setText("");
        props.alert("Text Cleared","success");
        // wordLength(event.target.value);
    }
    const onCopy=(event)=>{
        navigator.clipboard.writeText(text);
        props.alert("Copied To Clipboard","success");

    }
    const onCut=(event)=>{
        navigator.clipboard.writeText(text);
        setText("");
        // wordLength(event.target.value);
        props.alert("Text Cut is Successfull","success");

    }

    // const wordLength=(t)=>{
    //     let str=t;
    //     let arr=str.split(" ");
    //     // console.log(arr);
    //     let c=0;
    //     for(let i=0;i<arr.length;i++)
    //     {
    //         if(arr[i]!==" " && arr[i]!=="")
    //         {
    //             c++;
    //         }
    //     }
    //     setLength(c);
    // }

    const [text,setText]=useState("Enter text here.")
    // const [length,setLength]=useState(text.split(" ").length);
    return (
    <>
    <div className="container" style={{color: props.color==='white'?'black':'white'}}>
        <label className="mb-3" htmlFor="text"><h1>{props.heading}</h1></label>
        <textarea className="form-control" style={{backgroundColor: props.color==="white"?'white':props.color,color: props.color==="white"?'black':'white'}} id="text" value={text} onChange={handleOnChange} rows="5">Enter text here</textarea>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleOnUpClick}>Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleOnLowClick}>Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={onCopy}>Copy</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={onCut}>Cut</button>
    </div>
    <div className="container" style={{color: props.color==='white'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=> {return element.length!==0}).length} Minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter text to preview.'}</p>
    </div>
    </>);
}
// #endregion

export default Textform;