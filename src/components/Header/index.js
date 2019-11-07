import React from 'react';

import './style.css';

import Logo from '../../assets/facebook_logo.png';
import imgProfile from '../../assets/my-profile-40x40.jpg';

function Header() {
  return (
    <header id="main-header">
      <div className="content">
        <div id="logo-header">
          <img src={Logo} alt="Facebook"/>
        </div>
        <div className="linkProfile">
          <a href="javascript:void()">
            Meu Perfil
            <img src={imgProfile} className="avatar" alt="perfil"/>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;