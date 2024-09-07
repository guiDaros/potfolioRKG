import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team"; // Importação do componente Team
import Footer from "./components/Footer";
import "./index.css"; // Importação dos estilos globais

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <Portfolio />
      <Team /> {/* Exibe os blocos do Team */}
      <Footer />
    </div>
  );
}

export default App; // Certifique-se de exportar o componente App
