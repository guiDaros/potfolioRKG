import logo from '../assets/images/LOGO.png'
import React, { useEffect, useState } from 'react';
import './Header.css'; // Estilo específico para o Header

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="#hero">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <nav className="nav">
        <a href="#team">Time</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact" className="contact-button">Contate-nos</a>
      </nav>
    </header>
  );
};

export default Header;
