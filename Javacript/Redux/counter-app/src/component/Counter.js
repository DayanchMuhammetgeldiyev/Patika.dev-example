import React,{useState} from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counter/counterSlice";

function Counter() {

  const [amount, setAmount] = useState(3);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <br />
      <br />
      <input type="number"  value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <button onClick={() => dispatch(incrementByAmount(amount))}>+</button>
    </div>
  );
}

export default Counter;
