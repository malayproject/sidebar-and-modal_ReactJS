import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.clickModalHandler} className="btn">
      {props.children}
    </button>
  );
};

export default Button;
