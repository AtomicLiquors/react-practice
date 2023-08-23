
import './App.css';
import { useState } from 'react';

const heavyWork = () => {
  console.log('big load of work');
  return ['이콩이', '구름이'];
}

function App() {
  //const [names, setNames] = useState(heavyWork);
  const [names, setNames] = useState(() => {
   return heavyWork();
  });
  const [input, setInput] = useState('');
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log(prevState);
      return([input, ...prevState])
    })    
  };

  return (
    <div className="App">
      <input type = "text" value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>Upload</button>
      {names.map( (name, idx) => {
        return <p key = {idx}>{name}</p>
      })}
    </div>
  );
}

export default App;
