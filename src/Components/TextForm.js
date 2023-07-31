import React, { useState } from "react";

export default function TextForm(props) {
  // const handleClearclick = () => {
  //   console.log("Clear was clicked");
  //   let newText = " ";
  //   setText(newText);
  // };

  const handleUpperCase = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case !", "success");
  };

  const handleLowerCase = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case !", "success");
  };

  const handleSentenseCase = () => {
    console.log("Sentensecase was clicked");
    let strSplit = text.toLowerCase().split(" ");
    for (let i = 0; i < strSplit.length; i++) {
      if (i === 0) {
        strSplit[i] =
          strSplit[i].charAt(i).toUpperCase() + strSplit[i].slice(1);
      } else {
        strSplit[i] = strSplit[i].toLowerCase();
      }
    }
    let newText = strSplit.join(" ");
    setText(newText);
    props.showAlert("Converted to sentence case !", "success");
  };
  const handleTitleCase = () => {
    console.log("Capitalizecase was clicked");
    let strSplit = text.toLowerCase().split(" ");
    for (let i = 0; i < strSplit.length; i++) {
      strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1);
    }
    let newText = strSplit.join(" ");
    setText(newText);
    props.showAlert("Converted to title case !", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard !", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed unnecessary spaces !", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#303030",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        {/* <button className="btn btn-primary mx-1" onClick={handleClearclick}>
          Clear
        </button> */}
        <button className="btn btn-primary mx-1" onClick={handleUpperCase}>
          Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
          Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSentenseCase}>
          Sentence Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleTitleCase}>
          Title Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes required read the text</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
