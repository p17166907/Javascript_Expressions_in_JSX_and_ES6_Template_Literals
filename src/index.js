import React from "react";
import ReactDOM from "react-dom";

const fName = "Evan";
const lName = "Jordan";
const theNumber = 8;

console.log({ fName }); // prints: {name: "Evan"}
console.log(fName); // prints: Evan

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {theNumber}!!!</p>
    <p>3 + 3 = {3 + 3}</p>
    <p>Random number => {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
