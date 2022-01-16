import React from 'react';
import Footer from '../Footer/Footer';
import Contact from './ContactSection/Contact/Contact';
import Home from './Home/Home';
import Project from './ProjectSection/Project/Project';

const HomeDetail = () => {
    return (
        <div>
            <Home></Home>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomeDetail;