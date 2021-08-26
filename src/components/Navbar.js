import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="border-bottom border-3 mb-3">
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.mode === "dark" ? "dark" : "light"
        } navbar-light`}
        id="nav"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link active border border-0 bg-${
                    props.mode === "dark" ? "dark" : "white"
                  }`}
                  to="/"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active border border-0 bg-${
                    props.mode === "dark" ? "dark" : "white"
                  }`}
                  to="/about"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
            </ul>
            {/* <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
                onClick={() => {
                  props.toggleMode("primary");
                }}
              ></div>
              <div
                className="bg-success rounded mx-2"
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
                onClick={() => {
                  props.toggleMode("success");
                }}
              ></div>
              <div
                className="bg-danger rounded mx-2"
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
                onClick={() => {
                  props.toggleMode("danger");
                }}
              ></div>
              <div
                className="bg-warning rounded mx-2"
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
                onClick={() => {
                  props.toggleMode("warning");
                }}
              ></div>
            </div> */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={() => {
                  props.toggleMode(null);
                }}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "dark"
                  ? "Enable Light Mode"
                  : "Enable Dark Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
