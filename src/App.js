import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";

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

  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-success");
  // };

  const toggleMode = (cls) => {
    if (mode === "light") {
      document.body.classList.add("bg-dark");
      setMode("dark");
      showAlert("success", "Mode Changed", "Dark Mode Enabled");
    } else if (mode === "dark") {
      document.body.classList.remove("bg-dark");
      setMode("light");
      showAlert("success", "Mode Changed", "Light Mode Enabled");
    }
    // removeBodyClasses()
    // document.body.classList.add("bg-" + cls);
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          aboutTxt="About"
          showAlert={showAlert}
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <TextForm showAlert={showAlert} mode={mode} />
          </Route>
          <Route exact path="/about">
            <About showAlert={showAlert} mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
