import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onRouteChange, activePage }) => {
    return (
    <nav className="menu">
        <ul>
          <li className="menu__item">
            <Link to="/">
                <button
                    onClick={() => onRouteChange('home')}
                    className={`menu__link ${activePage === 'home' ? 'menu__link--selected' : ''}`}
                >Home</button>
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/about">
                <button
                    onClick={() => onRouteChange('about')}
                    className={`menu__link ${activePage === 'about' ? 'menu__link--selected' : ''}`}
                >About</button>
            </Link>
          </li>
        </ul>
    </nav>
    );
}

export default Header;