import React from 'react';
import './Team.css';  // Estilos atualizados para os blocos assimétricos

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-member left">
        <h2>Kaiki Pauletto</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="team-member right">
        <h2>Robson Alves</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="team-member left">
        <h2>Guilherme Daros</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}

export default Team;

