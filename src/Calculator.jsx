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
      const result = eval(input);
      setInput(Number(result).toFixed(2).toString()); // Show only 2 digits after decimal
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 p-4">
      <p className="text-white text-4xl p-3 font-bold">Calculator</p>
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-white w-full max-w-xs">
        <div className="mb-4 text-right text-3xl bg-gray-700 p-4 rounded-lg font-mono overflow-x-auto whitespace-nowrap min-h-[3rem]">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-3">
          <button
            className="p-4 text-xl col-span-4 bg-red-500 rounded-lg hover:bg-red-400 transition"
            onClick={clearInput}
          >
            C
          </button>
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "+",
            "=",
          ].map((btn) => (
            <button
              key={btn}
              className="p-4 text-xl bg-gray-600 rounded-lg hover:bg-gray-500 transition"
              onClick={btn === "=" ? calculateResult : () => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
