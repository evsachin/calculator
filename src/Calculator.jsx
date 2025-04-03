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
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-white w-80">
        <div className="mb-4 text-right text-3xl bg-gray-700 p-4 rounded-lg font-mono">
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
