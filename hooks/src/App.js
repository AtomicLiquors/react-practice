
import './App.css';
import { useState, useRef, useEffect } from 'react';

const App = () => {
  const[count, setCount] = useState(1);
  //const [renderCount, setRenderCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(()=>{
    //setRenderCount(renderCount + 1);
    renderCount.current = renderCount.current + 1;
  }

  )

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)} >올려</button>
    </div>
  );
}

export default App;
