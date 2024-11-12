import React, { useState, useEffect } from "react";
import Love from './Love.png';
import Sad from './Sad.png';
import Like from './Like.png';

function EmojeeCounter(props) {
  console.log("pic is ", props.pic);

  const [pic, setPic] = useState(Love); // Default picture set to Love
  const [count, setCount] = useState(0); // Initialize click count

  useEffect(() => {
    console.log("function called", props.pic);
    if (props.pic === "Love") {
      setPic(Love);
    } else if (props.pic === "Like") {
      setPic(Like);
    } else if (props.pic === "Sad") {
      setPic(Sad);
    }
  }, [props.pic]); // Update picture when pic prop changes

  const ClickHandle = () => {
    setCount(count + 1); // Increment click count
  };

  return (
    <div className="App">
      <p>{props.pic}</p>
      <button onClick={ClickHandle}>
        {count}
        <img src={pic} alt={props.pic} />
      </button>
    </div>
  );
}

export default EmojeeCounter;
