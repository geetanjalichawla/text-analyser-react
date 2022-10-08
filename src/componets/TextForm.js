import React ,{useState} from 'react'
export default function TextForm(props) {

    const [text,setText] = useState("enter your text here");
const textchange = (event)=>
{
    setText(event.target.value);
}
const textToUpper= ()=>
{
    let str = text.toUpperCase();
    setText(str);
}
const textTOLower = ()=>
{
    let str = text.toLowerCase();
    setText(str);
}


  return (
  <div className="container my-4 m-auto" >
    <div className="my-6">
  <label htmlFor="mytext my-4" className="form-label">{props.heading}</label> 
  <textarea className="form-control my-4" id="mytext" onChange={textchange} value={text} rows="7" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'light'?"#0c2552":'white'}}></textarea>
    </div>
      
<button type="button my-4" className="btn btn-primary btn-md m-3" onClick={textToUpper}>To Uppercase</button>   
<button type="button my-4" className="btn btn-primary btn-md m-3" onClick={textTOLower} >TO Lowercase</button>

    <div className="container">
        <h1>summary</h1>
        <p>text have {text.split(" ").length} words and {text.length} charaters </p>
    </div>
    </div>  

  )
}
