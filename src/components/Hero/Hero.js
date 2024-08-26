import React from 'react';

const Hero = () => {
    return (
        <header id="header" role="banner" className="header">
            <div className="header--centered">
                <h1>Justin Coleman</h1>
                <h3>front-end designer</h3>
                <hr />
                <p>HTML • CSS • Sass • JavaScript • CSS Grid • Flexbox • Gulp • Wordpress • Git • Bootstrap • Node.JS • NPM • SVN • jQuery</p>
                <div className="header__arrow"><a href="#portfolio">&nbsp;</a></div>
            </div>
            <div className="header--mask"></div>
        </header>
    );
}

export default Hero;
