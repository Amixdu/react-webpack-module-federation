import React from "react";

const Button = ({ name }) => {
  return (
    <button onClick={() => console.log(`${name} button clicked`)}>{name}</button>
  );
};

export default Button;
