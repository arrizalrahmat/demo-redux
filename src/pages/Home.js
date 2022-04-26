import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterDecrement, counterIncrement } from "../store/actions";

const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterIncrement());
  };
  const handleDecrement = () => {
    dispatch(counterDecrement());
  };
  return (
    <div>
      <h1>Home</h1>
      <h1>{state.counter}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Home;
