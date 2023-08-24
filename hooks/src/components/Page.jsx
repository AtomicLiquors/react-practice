import React from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


//const Page = ({ isDark, setIsDark }) => {
const Page = () => {
    const data = useContext(ThemeContext);
    console.log(data);
    return (
        <div className="page">
           {/* <Header isDark = {isDark}/>
            <Content isDark = {isDark}/>
            <Footer isDark = {isDark} setIsDark={setIsDark}/>*/}
            {/*<Header/>
            <Content/>
            <Footer/>*/}
        </div>
    );
};

export default Page;