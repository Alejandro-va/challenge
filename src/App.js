import React from "react";
import PantallaPrincipal from "./pages/PantallaPrincipal";
import Genero from "./pages/Genero";
import Datos from "./pages/Datos";
import Horoscopo from "./pages/Horoscopo";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <PantallaPrincipal />
        </Route>

        <Route path="/genero">
          <Genero />
        </Route>

        <Route path="/datos/:genero">
          <Datos />
        </Route>

        <Route path="/horoscopo/:form">
          <Horoscopo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
