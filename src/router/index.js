import React from "react";
import {useState, useEffect} from 'react';

function Example() {
  const isOnline = useExample(123);
  console.log(React);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
    return () => {
      console.log('end!');
    }
  });
  return (
    <div>
      {isOnline}
      <p>点击了{count}次</p>
      <button
        onClick={() => setCount(count + 1)}
      >点我</button>
    </div>
  )
}

export default Example;


function useExample(ID) {
  const [isOnline, setIsOnlie] = useState(false);

  function handleStatus(status) {
    setIsOnlie(status.isOnline)
  }

  useEffect(() => {
    console.log('useExample');
    handleStatus({isOnline: true})
  });

  return isOnline
}