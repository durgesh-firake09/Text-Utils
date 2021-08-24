import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (msgType, msgHeading, msg) => {
    setTimeout(() => {
      setAlert(null);
    }, 2000);
    setAlert({
      type: msgType,
      heading: msgHeading,
      msg: msg,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      document.body.classList.add("bg-dark");
      setMode("dark");
      showAlert("secondary", "Mode Changed", "Dark Mode Enabled");
    } else if (mode === "dark") {
      document.body.classList.remove("bg-dark");
      setMode("light");
      showAlert("success", "Mode Changed", "Light Mode Enabled");
    }
  };

  return (
    <>
      <Navbar
        title="Text Utils"
        aboutTxt="About"
        showAlert={showAlert}
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        mode={mode}
      ></TextForm>
    </>
  );
}

export default App;
