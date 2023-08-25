import React from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/home';
import Info from '../pages/info';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

//const Page = ({ isDark, setIsDark }) => {
const Page = () => {
    const data = useContext(ThemeContext);
    console.log(data);
    return (
        <div className="page">
           {/* <Header isDark = {isDark}/>
            <Content isDark = {isDark}/>
            <Footer isDark = {isDark} setIsDark={setIsDark}/>*/}
            
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}> </Route>
                <Route path='/info' element={<Info/>}> </Route>
            </Routes>
            <Content/>
            <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default Page;