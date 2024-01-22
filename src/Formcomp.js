import React, {useState} from "react";

export default function Formcomp(props) {
    const upCase = ()=>{
        
        setText(text.toUpperCase())
        
    }
    const onChange = (e)=>{
        setText(e.target.value)
    }
    const[text, setText] = useState("Enter text here");
  return (
    <>
    <div id="Main" className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h2>{props.title}</h2>
        </label>
        <textarea
          className="form-control"
          id="mybox"
          rows="3"
          value={text}
          onChange={onChange}
        ></textarea>
      </div>
      <button className="btn btn-secondary btn-lg" onClick={upCase}>
        Change Text
      </button>
      </div>
    </>
  );
}
