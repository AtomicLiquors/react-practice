import React from 'react';
import ReactDOM from 'react-dom/client';

// Before: 다음 컴포넌트에서 문제가 되는 부분을 설명하고 개선하세요.
function AmountBefore({ value }) {
  const [amountKR, setAmountKR] = React.useState(() => value.toLocaleString());

  React.useEffect(() => {
    if (value == null) {
      setAmountKR(null);
    } else {
      setAmountKR(value.toLocaleString());
    }
  }, [value]);

  return <span style={{ color: 'red' }}>Before: {amountKR}</span>;
}

// After: 개선된 컴포넌트
function AmountAfter({ value }) {
  const amountKR = value == null ? '' : value.toLocaleString();
  return <span style={{ color: 'green' }}>After: {amountKR}</span>;
}
/*
🔍 문제의 핵심
useState 초기값 계산 시점
value.toLocaleString()이 바로 실행됩니다. 즉, value가 undefined거나 null이면 초기 렌더링 시 오류 발생 가능성이 있습니다.

불필요한 상태 업데이트
amountKR는 value만 변할 때 바뀌므로 굳이 상태로 관리할 필요 없이 직접 계산해서 렌더링해도 됩니다. 상태로 관리하면 렌더링이 한 번 더 일어나 성능 저하가 발생할 수 있습니다.

불필요한 useEffect 사용
상태를 굳이 매번 value 바뀔 때 갱신하는 구조는 useEffect와 useState 모두를 사용하는 과도한 구현입니다.
*/

// 테스트용 App
function App() {
  const [value, setValue] = React.useState(123456789);

  return (
    <div>
      <h1>Amount 컴포넌트 테스트</h1>
      <AmountBefore value={value} />
      <br />
      <AmountAfter value={value} />
      <br /><br />
      <button onClick={() => setValue(value + 10000)}>+10,000</button>
      <button onClick={() => setValue(null)}>null로 설정</button>
    </div>
  );
}

// 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
