
import './App.css';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState(1);
  const modifyTime = () => {
    let newTime;

    newTime = (time >= 12 ? 1 : time + 1);
    
    setTime(newTime)
  } 

  return (
    <div className="App">
      <span>현재시각 : {time}시</span>
      <button onClick={ modifyTime }>Update</button>
    </div>
  );
}

export default App;
