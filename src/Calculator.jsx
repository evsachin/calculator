import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Use eval with caution in real apps
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
        <div className="mb-4 text-right text-2xl bg-gray-700 p-4 rounded">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/"].map((btn) => (
            <button key={btn} className="btn" onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
          {["4", "5", "6", "*"].map((btn) => (
            <button key={btn} className="btn" onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
          {["1", "2", "3", "-"].map((btn) => (
            <button key={btn} className="btn" onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
          {["0", ".", "=", "+"].map((btn) => (
            <button
              key={btn}
              className="btn"
              onClick={btn === "=" ? calculateResult : () => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
          <button className="btn col-span-2 bg-red-500" onClick={clearInput}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}
