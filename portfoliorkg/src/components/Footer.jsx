import React from 'react';
import './Footer.css'; // Importa o CSS específico para o footer
import RKGLogo from '../assets/images/RKGfull.png'; // Importe a imagem do logo

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo à esquerda que redireciona ao topo */}
      <div className="footer-left">
        <a href="#top"> {/* Adiciona um link para o topo */}
          <img src={RKGLogo} alt="RKG Logo" className="footer-logo" />
        </a>
      </div>

      {/* Políticas de Privacidade no centro */}
      <div className="footer-center">
        <a href="/privacy" className="footer-link">Políticas de Privacidade</a>
      </div>

      {/* Redes sociais à direita */}
      <div className="footer-right">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-instagram-icon.png" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-whatsapp-icon.png" alt="WhatsApp" className="social-icon" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-tiktok-icon.png" alt="TikTok" className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
