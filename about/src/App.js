
import './App.css';
import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  /* location이 원시 타입일 때 : location 변화에 대해서만 useEffect 발동. */
  //const location = isKorea ? '한국' : '외국';

  /* location이 객체일 때 : location 변화, number 변화 모두에 대해 useEffect 발동. */
  /*
  const location = {
      country: isKorea ? '한국' : '외국'
    };
  */

    /* useMemo 적용 */
  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국',
    };
  }, [isKorea]);

  useEffect(() => {
    console.log('useEffect 호출');
  }, [location]);

  return (
    <div className="App">
      <h2>하루에 몇끼 먹어요?</h2>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={ () => setIsKorea(!isKorea) }>비행기</button>
    </div>
  );
}

export default App;
