import React from 'react';
import { Link } from 'react-router-dom';

import './header.component.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <header className="" title="header">
        <Link to={`/`} style={{ textDecoration: 'none', color: 'inherit'}}>
          <div className="logo">
            <img src={'/res/logo.png'} alt="logo"/>
          </div>
        </Link>
      </header>
    </div>
  );
}

export default Header;
