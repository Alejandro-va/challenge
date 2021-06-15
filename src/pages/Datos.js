import React, {useState, useEffect} from 'react';
import './Datos.css';
import {Link, useParams} from 'react-router-dom';
import atras from "../image/Atras.png";
import tercera from "../image/tercera.png";
import botonNaranja from "../image/continuar.png";
import botonVolver from "../image/volver.png";

const Datos = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({})

let {genero} = useParams()

 // console.log(genero)


  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value, genero
    })
  }

let url = 'http://localhost:5500/horoscopo';
  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(form)
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( form )
    };
    fetch(url, requestOptions)
       .then(res => setData([...data, res]))
      }
     
  

console.log(form)
   return ( <div className="genero-principal">
 
         {/* <h2>datos{genero}</h2> */}

       

      <nav className="nav-genero">
         <div className="marcoAtras">
         <Link  to="/">
        <img src={atras} alt=""  className="imagenAtras"/>
         </Link>
        </div>
        <label className="tuGenero">Tus Datos</label>
      </nav>

      <div className="segunda">
      <img src={tercera} alt=""  className="segundaImg"/>
      <label className="labelSegunda">INGRESÁ TUS DATOS</label>
      </div>


       <form onSubmit={handleSubmit}>

            <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={handleChange} className="input" required/>
       <input type="email" name="email" placeholder="EMail" value={form.email} onChange={handleChange} className="input" required/>
       <input type="date" name="date" placeholder="Fecha de Nacimiento" value={form.date} onChange={handleChange} className="input" required/>

         <div className="btn-Datos" >

         <Link className="link" to="/genero">
            {" "}
            <img className="azul" src={botonVolver} alt="" />{" "}
          </Link>

         <input title="boton enviar" alt="boton enviar" src={botonNaranja} type="image"  className="naranjado"/>
         </div>
         </form>


      </div>
   )
}

export default Datos
