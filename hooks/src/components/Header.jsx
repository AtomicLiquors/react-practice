import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';


//const Header = ({ isDark }) => {
const Header = () => {
    const { isDark } = useContext(ThemeContext);
    const user = useContext(UserContext);

    console.log(user);

    return (
        <header
            className = "header"
            style={{
                backgroundColor:isDark?'black':'lightgrahy',
                color: isDark ? 'white' : 'black',
            }}
            >   
            <h1>Welcome {user}</h1>

            <Link to="/">Home</Link>
            
            <Link to="/info">Info</Link>
        </header>
    );
}

export default Header;