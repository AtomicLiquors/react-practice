
import './App.css';
import { useState, useRef, useEffect } from 'react';

const App = () => {
  const inputRef = useRef();

  useEffect(()=>{
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`입력 아이디 : ${inputRef.current.value}`);
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='username'/>
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default App;
