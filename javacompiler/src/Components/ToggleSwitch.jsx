import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ToggleSwitch({ onToggle1 }) {
  const [isOn, setIsOn] = useState(false);

  const handleChange = () => {
    const newState = !isOn;
    setIsOn(newState);

    if (onToggle1) {
      onToggle1(newState);
    }
  };

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheck"
        checked={isOn}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheck">
        {isOn ? (
          <i className="bi bi-moon ms-3"></i>
        ) : (
          <i className="bi bi-sun ms-3"></i>
        )}
      </label>
    </div>
  );
}
