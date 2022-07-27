import React from "react";
import ReactDOM from "react-dom";

const name = "Evan";
const theNumber = 8;

console.log({ name }); // prints: {name: "Evan"}
console.log(name); // prints: Evan

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {theNumber}!!!</p>
  </div>,
  document.getElementById("root")
);
