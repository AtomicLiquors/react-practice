import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


//const Footer = ({ isDark, setIsDark }) => {
const Footer = () => {
    const { isDark, setIsDark } = useContext(ThemeContext);
    const toggleTheme = () => {
        setIsDark(!isDark);
    };
    return (
        <footer
            className = "footer"
            style={{
                backgroundColor:isDark?'black':'lightgrahy',
            }}
            >
                <button classNAme = "button" onClick={toggleTheme}>
                    DarkMode
                </button>
        </footer>
    );
};

export default Footer;