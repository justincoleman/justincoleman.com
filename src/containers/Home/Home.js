import React from 'react';
import Hero from '../../components/Hero/Hero';
import Portfolio from '../../components/Portfolio/Portfolio';
import Experience from '../../components/Experience/Experience';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';
import AboutMe from '../../components/AboutMe/AboutMe';

import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (    
        <main>
            <Hero />
            <Portfolio />
            <AboutMe />
            <Experience />
            <Skills />
            <Education />
            <Footer />
        </main>
    );
}

export default Home;