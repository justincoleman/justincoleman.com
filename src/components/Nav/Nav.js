import React from 'react';  

const Header = ({ onRouteChange, activePage }) => {
    console.log("activePage", activePage);

    return (
    <nav className="menu">
        <ul>
            <li className="menu__item">
                <button 
                    onClick={() => onRouteChange('home')} 
                    title="Home" 
                    className={`menu__link ${activePage === 'home' ? 'menu__link--selected' : ''}`}
                >Home</button>
            </li>
            <li className="menu__item">
                <button 
                    onClick={() => onRouteChange('about')} 
                    title="About" 
                    className={`menu__link ${activePage === 'about' ? 'menu__link--selected' : ''}`}
                >About</button>
            </li>
            <li className="menu__item">
                <button 
                    onClick={() => onRouteChange('labs')} 
                    title="Labs" 
                    className={`menu__link ${activePage === 'labs' ? 'menu__link--selected' : ''}`}
                >Labs</button>
            </li>
        </ul>
    </nav>
    );
}

export default Header;