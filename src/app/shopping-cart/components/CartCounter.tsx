"use client";

import { useState } from "react";

interface CartCounterProps {
    value?: number
}

export const CartCounter = ({value = 0}: CartCounterProps) => {
  const [counter, setCounter] = useState(value);

  const handleCounter = (value: number) => {
    if (counter + value >= 0) {
      setCounter((prev) => prev + value);
    }
  };
  return (
    <>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button
          onClick={() => handleCounter(-1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-800 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
        <button
          onClick={() => handleCounter(+1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-800 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </>
  );
};
