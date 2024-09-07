
import React from 'react';
import './Portfolio.css'; // Estilos específicos para o portfólio

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-items">
        <div className="portfolio-item">
          <img src="project1.jpg" alt="Projeto 1" className="portfolio-image" />
          <h3>Projeto 1</h3>
        </div>
        <div className="portfolio-item">
          <img src="project2.jpg" alt="Projeto 2" className="portfolio-image" />
          <h3>Projeto 2</h3>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
