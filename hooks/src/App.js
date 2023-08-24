
import './App.css';
import { useState, useRef, useEffect } from 'react';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';


function App() {
  const [isDark, setIsDark] = useState(false);
  //return <Page isDark = {isDark} setIsDark = {setIsDark} />;

  return (
    <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value = {{isDark, setIsDark}}>
        <Page isDark = {isDark} setIsDark={{setIsDark}}/>
      </ThemeContext.Provider>
    </UserContext.Provider>
    );
}

export default App;
