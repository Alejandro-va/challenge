import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import "./PantallaPrincipal.css";
import botonNaranja from "../image/continuar.png"

const PantallaPrincipal = () => {
  const [data, setData] = useState([]);


console.log(data)
  useEffect(() => {
   fetchData();
   console.log(data)
}, []);
    
  const fetchData = async () => {
    let dato = await fetch('https://randomuser.me/api/')
    let res = await dato.json();
    console.log(res);
    setData(res.results);

      
      console.log(data)

  };


  return (<div className="inicial">
     <div className="marco">
     {data.map((el) =>(<div key={el}><img className="foto" src={el.picture.large}/></div>))}
     </div>
     <Link className="link naranja" to="/genero"> <img className="botonNaranja" src={botonNaranja} alt=""/>{/* <img src={flecha} alt="" /> */}</Link>
     </div>)

   };
export default PantallaPrincipal;


    /*  (<div>{data.map((el) =>(<div key={el}>{el.cell}</div>))}</div>)*/