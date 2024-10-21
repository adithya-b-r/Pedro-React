import { useState } from 'react';


export const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState((prev) => !prev);
  }

  // return [state, toggle];
  // If u need same varibales as in function, return it as object
  return { state, toggle };
}