import React, { useState, useEffect } from "react";

function Local() {
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    const Value = localStorage.getItem("aryana")
    setInputValue(Value);
  }, []);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleClick = () => {
    localStorage.setItem("aryana", inputValue);
    handleInputChange({ target: { value: inputValue } })
  };

  return (
    <div className="md:w-2/3">
      <input className=" appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" value={inputValue} onChange={handleInputChange} />
      <div>
      <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={handleClick}>Click</button>
    </div>
    </div>
  );
}

export default Local
