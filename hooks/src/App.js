
import './App.css';
import { useState, useRef, useEffect, useContext } from 'react';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';


function App() {
  const [isDark, setIsDark] = useState(false);
  const user = useContext(UserContext);
  //return <Page isDark = {isDark} setIsDark = {setIsDark} />;

  return (
    <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value = {{isDark, setIsDark}}>
        {/*<Page isDark = {isDark} setIsDark={{setIsDark}}/>*/}
        <Page/>
      </ThemeContext.Provider>
    </UserContext.Provider>
    );
}

export default App;
