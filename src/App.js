import React from 'react';
import PantallaPrincipal from './pages/PantallaPrincipal';
import Genero from './pages/Genero';
import Datos from './pages/Datos';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

function App() {
/* const [sexo, setSexo] = React.useState("")

   const genero = (dato) =>{
      console.log(dato)
      setSexo([...sexo,dato])
   }
   console.log(sexo) */
  return (
    <div className="App">
        <Switch>

        <Route path="/" exact>
      <PantallaPrincipal/>
        </Route>

        <Route path="/genero" >
      <Genero />
      </Route>

      <Route  exact path="/datos/:genero"  component={Datos}>
      {/* <Datos/> */}
      </Route>

      </Switch>
    </div>
  );
}

export default App;
