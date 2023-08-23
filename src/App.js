import { useState } from 'react';
import './App.css';

function App() {

  const title = 'Suicide Squad'
  const id = 'head';
  let [titles, changeTitles] = useState(['콩이', '구름이', '시아님']);
  let [likesCount, modifyLikesCount] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={id} style={{color: 'gray', fontSize: '16px'}}>블로그</h4>
      </div>

      <button onClick = { ()=>{
        let copy = [...titles];
        copy[0] = 'It worked!';
        changeTitles(copy);
      } }>글수정</button>

      <button onClick = { () => {
        let copy = [...titles];
        copy.sort();
        changeTitles(copy);
       }}>가나다순정렬</button>

      <div className = "list">
        <h4>{titles[0]}<span onClick={ () => { modifyLikesCount( likesCount + 1) } }>❤</span> {likesCount}</h4>
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

       <Modal></Modal>
    </div>
  );
}

function Modal(){
  return (
    <div className = "modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내옹</p>
      </div>
  )
}

export default App;
