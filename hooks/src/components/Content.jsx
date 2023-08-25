import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

//const Content = ({ isDark }) => {
const Content = () => {
    const { isDark } = useContext(ThemeContext);
    const user = useContext(UserContext);
    return (
        <div
            className = "content"
            style={{
                backgroundColor:isDark?'black':'lightgrahy',
                color: isDark ? 'white' : 'black',
            }}
            >
                <p>{user}님</p>
        </div>
    );
}

export default Content;