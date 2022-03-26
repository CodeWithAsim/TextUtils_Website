import React , {useState} from 'react'

export default function Textform(props) {

    const [text,setText] = useState("Enter the text !");

    const toupper=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("success","Text has been converted to Upper Case !");
    }

    const tolower=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("success","Text has been converted to Lower Case !");
    }

    const toclear=()=>{
        let newtext="";
        setText(newtext);
        props.showAlert("success","Text has been cleared !");
    }

    const tocopy=()=>{
        // let newtext = document.getElementById("textf");
        // newtext.select();
        // navigator.clipboard.writeText(newtext.value);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("success","Text has been copied to the clipboard !");
    }

    const toremovesp=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("success","Extra spaces has been removed !");
    }

    const changer=(event)=>{
        setText(event.target.value);
    }
    
    return (
        <>
        <div className=" container my-3 " style={{color:props.mode==="light"?"black":"white"}} >
            <h2 className='mb-2'>{props.heading}</h2>
            <div className="mb-3" >
                <textarea style={{backgroundColor:props.mode==="light"?"white":"#2b3b5eb8",color:props.mode==="light"?"black":"white"}}className="form-control" id="textf" value = {text} onChange={changer} rows="5"></textarea>
            </div>
            <button disabled = {text.length===0} className="btn btn-primary mx-2 " onClick={toupper} >Convert to UpperCase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={tolower} >Convert to LowerCase</button> 
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={toclear} >Clear Text</button> 
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={tocopy} >Copy Text</button>  
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={toremovesp} >Remove Extra Space</button>          
        </div>
        <div className="container my-3"  style={{color:props.mode==="light"?"black":"white"}} >
            <h2>Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word , {text.length} characters </p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes required to read the complete text</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Noting to Preview!"}</p>

        </div>
        </>
    )
}
