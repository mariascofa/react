import React from "react";
import "./input.css";

const Input = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        className="task-input"
        placeholder="Enter your task"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Input;
