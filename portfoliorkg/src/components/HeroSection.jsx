import React, { useEffect } from 'react';
import './HeroSection.css';  // Estilos específicos para a hero section

const HeroSection = () => {
  // Função para lidar com o movimento do mouse
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const moveX = (clientX - window.innerWidth / 2) * 0.05; // Suave
    const moveY = (clientY - window.innerHeight / 2) * 0.05;

    const heroContent = document.querySelector('.hero-content');
    heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`; // Movimenta a hero section conforme o mouse
  };

  useEffect(() => {
    // Adiciona o evento de movimentação do mouse
    window.addEventListener('mousemove', handleMouseMove);

    // Remove o evento ao desmontar o componente
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Bem-vindo à RKG Agency</h1>
        <p>Oferecendo soluções inovadoras para o seu negócio</p>
        <a href="#services" className="cta-button">Saiba Mais</a>
      </div>
    </div>
  );
};

export default HeroSection;
