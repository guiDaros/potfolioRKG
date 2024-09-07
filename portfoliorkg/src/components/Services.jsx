
import React from 'react';
import './Services.css'; // Estilos específicos para a seção de serviços

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services-title">Nossos Serviços</h2>
      <div className="services-cards">
        <div className="service-card">
          <div className="service-icon">✍️</div> {/* Ícone para Copywriting */}
          <h3>Copywriting</h3>
          <p>Criamos textos persuasivos que engajam e convertem.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">👨‍💻</div> {/* Ícone para Gestão de Tráfego */}
          <h3>Gestão de Tráfego</h3>
          <p>Maximizamos o alcance do seu público através de estratégias otimizadas.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">📊</div> {/* Ícone para Branding */}
          <h3>Branding</h3>
          <p>Construímos e fortalecemos a identidade da sua marca no mercado.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🚀</div> {/* Ícone para Growth Hacking */}
          <h3>Growth Hacking</h3>
          <p>Estratégias de SEO, CRO e otimização para crescimento rápido e escalável.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
