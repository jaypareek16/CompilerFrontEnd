import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch.jsx";

export default function Header(props) {
  const [isDark, setIsDark] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Java");

  const handleToggle = (value) => {
    setIsDark(value);
    props.handleToggle(value);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    props.handleLanguageChange(lang);
  };

  const styling = {
    backgroundColor: isDark ? "#1e1e2e" : "#f8f9fa",
    color: isDark ? "white" : "black",
    minHeight: "90px",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={styling}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: styling.color }}>
            Jay's Compiler
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: styling.color }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: styling.color }}
                >
                  About
                </a>
              </li>
              <button
                className="btn btn-primary"
                style={{ marginLeft: "420px", padding: "7px" }}
                type="submit"
                onClick={() => {
                  props.handleClick();
                }}
              >
                Run
              </button>
            </ul>
            <form className="d-flex me-5">
              <div className="d-flex">
                <ToggleSwitch onToggle1={handleToggle} />
                <ul className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: styling.color }}
                  >
                    {selectedLanguage}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleLanguageChange("Java")}
                      >
                        Java
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleLanguageChange("Cpp")}
                      >
                        Cpp
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleLanguageChange("Python")}
                      >
                        Python
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
