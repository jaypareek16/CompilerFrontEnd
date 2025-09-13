import React, { useEffect, useState } from "react";

const message = "Output will be displayed here";

export default function OutputScreen(props) {
  const [color, setColor] = useState("light");
  useEffect(() => {
    if (props.color) {
      setColor("dark");
    } else {
      setColor("light");
    }
  }, [props.color]);

  const backcolor = color === "dark" ? "#2E3440" : "#eee";

  return (
    <div
      style={{
        flex: 1,
        background: "#eee",
        minHeight: "90vh",
        backgroundColor: backcolor,
        color: color === "dark" ? "white" : "black",
        padding: "10px",
      }}
    >
      <h4>Output Screen</h4>
      <h6 style={{ marginLeft: "10px" }}>{props.data1 || ""}</h6>
      <p>=== Code Execution successful ===</p>
    </div>
  );
}
