import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handlingUpBtn = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handlingLoBtn = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
  };

  const clearText = () => {
    setText("");
  };

  const handlingOnChange = (event) => {
    setText(event.target.value);
  };

  const copyText = () => {
    if (text.length !== 0) {
      navigator.clipboard.writeText(text);
      props.showAlert("success", "Success", " Text Copied to Clipboard");
    }
  };

  const pasteText = async () => {
    let text = await navigator.clipboard.readText();
    setText(text);
  };

  const fileUpload = () => {
    let uploadMenu = document.getElementById("fileUpload");
    if (uploadMenu.style.display === "none") {
      uploadMenu.style.display = "block";
      document.getElementById("uploadTxt").innerText = "Cancel Upload";
    } else if (uploadMenu.style.display === "block") {
      uploadMenu.style.display = "none";
      document.getElementById("uploadTxt").innerText = "Upload a .txt file";
    }
  };

  const readFile = (e) => {
    e.preventDefault();
    let fileToLoad = document.getElementById("formFile").files[0];

    let fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
      let textFromFileLoaded = fileLoadedEvent.target.result;
      setText(textFromFileLoaded);
    };
    try {
      fileReader.readAsText(fileToLoad, "UTF-8");
      props.showAlert("success", "Success", "File Uploaded Successfully.");
    } catch (error) {
      props.showAlert(
        "danger",
        "No File Selected",
        " Please Select a valid .txt file to open."
      );
    }
  };

  const viewSummary = () => {
    let summary = document.getElementById("summary");
    if (summary.style.display === "none") {
      summary.style.display = "block";
      document.getElementById("summaryBtn").innerText = "Close The Summary";
      document.getElementById("secHr").style.display = "block";
    } else if (summary.style.display === "block") {
      summary.style.display = "none";
      document.getElementById("summaryBtn").innerText = "View Full Summary";
      document.getElementById("secHr").style.display = "none";
    }
  };

  const preView = () => {
    let preview = document.getElementById("preview");
    if (preview.style.display === "none") {
      preview.style.display = "block";
      document.getElementById("previewBtn").innerText = "Close The Preview";
    } else if (preview.style.display === "block") {
      preview.style.display = "none";
      document.getElementById("previewBtn").innerText = "Preview Text";
    }
  };

  return (
    <div
      className={`container text-${
        props.mode === "dark" ? "light" : "dark"
      }`}
    >
      <h1>Enter The Text to Analyse</h1>
      <hr />
      <div className="mb-3">
        <textarea
          className={`form-control text-${
            props.mode === "dark" ? "light" : "dark"
          } bg-${props.mode === "dark" ? "dark" : "light"}`}
          id="text"
          rows="8"
          value={text}
          onChange={handlingOnChange}
          placeholder="Enter Text Here..."
        ></textarea>
      </div>
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "secondary" : "primary"
          } m-1`}
          onClick={handlingUpBtn}
          disabled={text===""}
        >
          Convert To Uppercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "secondary" : "primary"
          } m-1`}
          onClick={handlingLoBtn}
          disabled={text===""}
        >
          Convert To Lowercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "secondary" : "primary"
          } m-1`}
          onClick={removeExtraSpaces}
          disabled={text===""}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "secondary" : "primary"
          } m-1`}
          onClick={clearText}
          disabled={text===""}
        >
          Clear
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "secondary" : "primary"
          } m-1`}
          onClick={copyText}
          disabled={text===""}
        >
          Copy To Clipboard
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "secondary" : "primary"
          } m-1`}
          onClick={pasteText}
        >
          Paste From Clipboard
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "secondary" : "primary"
          } m-1`}
          id="uploadTxt"
          onClick={fileUpload}
        >
          Upload a .txt file
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "secondary" : "primary"
          } m-1`}
          id="summaryBtn"
          onClick={viewSummary}
        >
          View Full Summary
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "secondary" : "primary"
          } m-1`}
          id="previewBtn"
          onClick={preView}
        >
          Preview Text
        </button>
      </div>

      <form
        className="border border-2 rounded-4 rounded-3 rounded-3 my-3 p-3"
        action="/"
        style={{ display: "none" }}
        id="fileUpload"
      >
        <div>
          <label htmlFor="formFile" className="form-label">
            <h5>Upload a .txt File</h5>
          </label>
          <input
            className={`form-control bg-${
              props.mode === "dark" ? "dark" : "light"
            }`}
            style={{ color: props.mode === "dark" ? "white" : "black" }}
            type="file"
            accept="text/plain"
            id="formFile"
          />
        </div>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "secondary" : "primary"
          } mt-3`}
          onClick={readFile}
        >
          Upload File
        </button>
      </form>
      <hr id="firstHr" />
      <div
        className="container border border-2 rounded-4 rounded-3 rounded-3"
        style={{ display: "none" }}
        id="summary"
      >
        <h3>Summary of The Text</h3>
        <hr />
        <p>
          Total Words : {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}
        </p>
        <p>Total Characters : {text.length}</p>
        <p>Time to Read : {(text.split(/\s+/).filter((element)=>{return element.length !== 0}).length) * 0.008}</p>
      </div>
      <div>
        <hr id="secHr" style={{ display: "none" }} />
      </div>
      <div
        className="container border border-2 rounded-4 rounded-3 rounded-3 my-3"
        id="preview"
        style={{ display: "none" }}
      >
        <h4 className="my-2">Preview of text</h4>
        <hr />
        <div
          id="previewText"
          style={{ color: props.mode === "dark" ? "red" : "blue" }}
        >
          <p>
            {text.length === 0
              ? "Nothing to Preview"
              : text}
          </p>
        </div>
      </div>
    </div>
  );
}
