import { useState } from 'react';
import './App.css';

function App() {

  const title = 'Suicide Squad'
  const id = 'head'
  let [titles, useTitles] = useState(['콩이', '구름이', '시아님']);


  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={id} style={{color: 'gray', fontSize: '16px'}}>블로그</h4>
      </div>
      <div className = "list">
        <h4>{titles[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = "list">
        <h4>{titles[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = "list">
        <h4>{titles[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4>{title}</h4>
    </div>
  );
}

export default App;
