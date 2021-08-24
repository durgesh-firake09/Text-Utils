import React from "react";

export default function Navbar(props) {
  return (
    <div className="border-bottom border-3">
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode==='dark'?'dark':'light'} navbar-light`}
        id="nav"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/Text-Utils">
            {props.title}
          </a>
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
                <a className={`nav-link active border border-0 bg-${props.mode==='dark'?'dark':'white'}`} href="/Text-Utils" aria-current="page">
                  Home
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
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
