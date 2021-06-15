import React, { useState, useEffect } from "react";
import el from "../image/gen-1.png";
import neutro from "../image/gen-2.png";
import ella from "../image/gen-3.png";
import "./Genero.css";
import { Link } from "react-router-dom";
import botonNaranja from "../image/continuar.png";
import atras from "../image/Atras.png";
import segunda from "../image/segunda.png";

const Genero = () => {
  const [genero, setGenero] = useState({});

  //console.log(genero)

  const elRef = React.useRef();
  const neutroRef = React.useRef();
  const ellaRef = React.useRef();

  const preferencia = (e) => {
    console.log(e.target);
    if (e.target === elRef.current) {
      alert("chico");
      return setGenero({ genero: "chico" });
    }

    if (e.target === neutroRef.current) {
      alert("Neutro");
      return setGenero({ genero: "neutro" });
    }

    if (e.target === ellaRef.current) {
      alert("chica");
      return setGenero({ genero: "chica" });
    }
  };
  console.log(genero);

  return (
    <div className="genero-principal">
      <nav className="nav-genero">
         <div className="marcoAtras">
         <Link  to="/">
        <img src={atras} alt=""  className="imagenAtras"/>
         </Link>
        </div>
        <label className="tuGenero">Tu Género</label>
      </nav>
      <div className="segunda">
      <img src={segunda} alt=""  className="segundaImg"/>
      <label className="labelSegunda">INGRESÁ TU GÉNERO</label>
      </div>
      <div className="genero-container">
        <div className="btn-generos">
          <div className="genero">
            <img src={el} alt="" onClick={preferencia} ref={elRef} />
          </div>

          <div className="genero">
            <img src={neutro} alt="" onClick={preferencia} ref={neutroRef} />
          </div>

          <div className="genero">
            <img src={ella} alt="" onClick={preferencia} ref={ellaRef} />
          </div>
        </div>
        <div className="caja-btn">
          <Link className="link" to={`/datos/${JSON.stringify(genero)}`}>
            {" "}
            <img className="botonBNaranja" src={botonNaranja} alt="" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Genero;
