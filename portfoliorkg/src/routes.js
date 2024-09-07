
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import PrivacyPolicy from './pages/PrivacyPolicy';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/privacy" component={PrivacyPolicy} />
        {/* Adicione outras rotas aqui, se necessário */}
      </Switch>
    </Router>
  );
};

export default Routes;
