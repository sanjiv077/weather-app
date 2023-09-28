import React from "react";

const Input = ({setName , handleClick}) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter Your City"
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn1" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default Input;
