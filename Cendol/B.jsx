import React from "react";
import { useState } from "react";

const B = ({data}) => {
    console.log(data)
  let [btn, setBtn] = useState(true);
  let [count, setCount] = useState(data);
  let colorA;
  let colorB;

  btn
    ? (colorA = "#fcc200") && (colorB = "#42d5bb")
    : (colorA = "#42d5bb") && (colorB = "#fcc200");
  let handleClick = () => {
    setBtn(!btn);
    setCount(count + 10);
  };

  return (
    <div
      className="a"
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="counter"
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: "#ececec",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "100px",
            width: "100px",
            backgroundColor: colorA,
            borderRadius: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "900",
          }}
        >
          {count}
        </div>
      </div>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 15px",
          marginTop: "10px",
          border: "none",
          backgroundColor: colorB,
        }}
      >
        change color
      </button>
    </div>
  );
};

export default B;
