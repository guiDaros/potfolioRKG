import React from 'react';
import ReactDOM from 'react-dom/client'; // Importe a versão correta para React 18
import './index.css';
import App from './App';

const rootElement = document.getElementById('root'); // Verifique se esse ID está no index.html
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // React 18 método de renderização
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Elemento com id "root" não encontrado');
}
