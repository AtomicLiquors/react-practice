
import './App.css';
import { useState, useRef } from 'react';

const App = () => {
  //const [names, setNames] = useState(heavyWork);
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);
  console.log('Rendering...');


  const increaseCountState = () => {
    setCount(count+1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref : ", countRef.current);
  };
  
//Ref가 아무리 증가해도 화면이 업데이트되지 않는다. 
//console로는 변하는데 화면으론 가만히 있다가,
//state가 변할 때 그제야 변한 값이 나타난다.
  return (
    <div className="App">
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick = {increaseCountState}>State 올려</button>
      <button onClick = {increaseCountRef}>Ref 올려 </button>
    </div>
  );
}

export default App;
