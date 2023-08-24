
import './App.css';
import { useState, useRef } from 'react';

const App = () => {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
      setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref : ', countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log('var: ', countVar);
  };

  const printResults = () => {
    console.log('ref : ', countRef.current);
    console.log('var: ', countVar);
  }

  return (
    <div>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick = {doRendering}>렌더링</button>
      <button onClick = {increaseRef}>Ref 올려</button>
      <button onClick = {increaseVar}>Var 올려</button>
      
      <button onClick = {printResults}>결과</button>
    </div>
  );
}

export default App;
