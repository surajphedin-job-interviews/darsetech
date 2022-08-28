import { useState } from "react";
import Child from "../Child/Child";
import "./parent.css";

const INCREMENT_BY = 5;

const Parent = () => {
  const [count, setCount] = useState(10);

  const handleClick = () => {
    setCount((prev) => prev + INCREMENT_BY);
  };
  return (
    <div className="root">
      <div className="wrapper">
        <p>The number is: {count}</p>
        <Child incrementBy={INCREMENT_BY} handleClick={handleClick}></Child>
      </div>
    </div>
  );
};
export default Parent;
