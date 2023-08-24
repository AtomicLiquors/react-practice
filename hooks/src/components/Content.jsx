import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

//const Content = ({ isDark }) => {
const Content = () => {
        const { isDark } = useContext(ThemeContext);
    return (
        <div
            className = "content"
            style={{
                backgroundColor:isDark?'black':'lightgrahy',
                color: isDark ? 'white' : 'black',
            }}
            >
                <p>content</p>
        </div>
    );
}

export default Content;