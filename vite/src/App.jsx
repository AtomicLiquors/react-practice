import { useState } from 'react'
import {} from 'react-router'
import styled from "styled-components";




function App() {
  
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  };

  return (
    <S.Root>
      <h1>Vite + React</h1>
      <S.Card>
          <button onClick={() => increase()}>count is {count}</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
      </S.Card>
      <S.Docs>Click on the Vite and React logos to learn more</S.Docs>
      <S.Wrap>yekoooong2</S.Wrap>
    </S.Root>
  );
}

const S = {
  Root: styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  Wrap: styled.div`
    background: gray;
  `,

  Card: styled.div`
    padding: 2em;
  `,

  Docs: styled.p`
    color: #888;
  `,
};

export default App
