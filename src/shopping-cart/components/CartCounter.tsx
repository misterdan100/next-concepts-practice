"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface CartCounterProps {
    value?: number
}

export interface CounterResponse {
  count: number
}

const getApiCounter = async ():Promise<CounterResponse> => {
  const url = "http://localhost:3000/api/counter";
  const data = await fetch(url).then((res) => res.json());

  return data
};

export const CartCounter = ({value = 0}: CartCounterProps) => {

  const { count } = useAppSelector( state => state.counter)
  const dispatch = useAppDispatch()
    
  // useEffect(() => {
  //   dispatch(initCounterState(value))
  // }, [])

  useEffect(() => {
    getApiCounter()
      .then(data => dispatch(initCounterState(data.count)))
  }, [dispatch])


  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          onClick={() => dispatch( substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-800 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
        <button
          onClick={() => dispatch( addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-800 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </>
  );
};
