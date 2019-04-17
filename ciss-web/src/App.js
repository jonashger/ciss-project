import React, { Component } from 'react';
import FormFuncionario from './feature/FormFuncionario';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from './feature/Index';
import Funcionarios from './feature/Funcionarios';
import Header from './feature/Header';
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header/>
        <Route path="/" exact component={Index} />
        <Route path="/cadastro/" component={FormFuncionario} />
        <Route path="/funcionarios/" component={Funcionarios} />
      </div>
    </Router>
    );
  }
}

export default App;
