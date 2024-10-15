import React from 'react';
import { useState, useEffect } from 'react';

/* useEffect is mainly used with API's */

export const Text = () => {
  const [text, setText] = useState("");

  // It is displayed when component is mounted and being updated.
  useEffect(() => {
    console.log("Component mounted");
  })

  // It is displayed when component is being updated.
  useEffect(() => {
    console.log("This is executed when text get changed.");
  }, [text]);

  // It is displayed when component is mounted.
  useEffect(() => {
    console.log("This is executed when mounted");

    return () => {
      console.log("Component unmounted");
    }
  }, []);

  return (
    <div>
      {/* 2. Updating */}
      <input onChange={(event) => setText(event.target.value)} />
      <h1>{text}</h1>
    </div>
  );
}