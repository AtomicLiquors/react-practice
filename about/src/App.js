
import './App.css';
import React, { useState, useEffect, useMemo } from 'react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create((set)=>({
  count:0, // 모든 컴포넌트들이 사용 가능한 state 보관함
  increaseCount(){
    set((state) => ({ count : state.count + 1}))
  },
  
  // async 요청

  // devtools로 디버깅
}))

function Card() {
  const {count} = useStore();
  return(
    <div className="App">
      <p>카드 {count}</p>
    </div>
  )
}


function App() {
  const {count, increaseCount} = useStore();
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
      <Card></Card>
      <button onClick = { () => {increaseCount();} }></button>
      {/*
      <button onClick={()=>{useStore.setState({ count : count - 1})}}>버튼</button>
      DOM마다 직접 zustand state를 바꾸는 로직을 집어넣으면 동시다발적인 10, 1000번의 state 조작이 따로 일어날텐데 버그가 우려된다.
      store 안에 미리 만들어놓은 함수를 쓰는 게 좋은 관습이다.
       *  */}
      <h2>하루에 몇끼 먹어요?</h2>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={ () => setIsKorea(!isKorea) }>비행기</button>
    </div>
  );
}

export default App;
