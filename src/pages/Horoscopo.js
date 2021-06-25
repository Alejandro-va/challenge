import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Fecha from "../components/Fecha";
import Signo from "../components/Signo";
import ListarHoroscopo from "../components/ListarHoroscopo";

const Horoscopo = (props) => {
  let { form } = useParams();
  form = JSON.parse(form);
  console.log(form);

  //console.log(horoscopo)
  /*   React.useEffect(() => {
    fetchData();
    console.log(horoscopo);
  }, []);

  const fetchData = async () => {
    let dato = await fetch("https://api.adderou.cl/tyaas/");
    let res = await dato.json();
    console.log(res);
    setHoroscopo(res);
    console.log(horoscopo);
  }; */

  /*     ['acuario', 'aries',' cancer','capricornio','esporpion','geminis', 'leo', 'libra', 'picis', 'sagitario', 'tauro', 'virgo' ] */
const [zodiaco, setZodiaco] = useState()
/*   const Listar = (props) =>{
     setZodiaco()
  } */

  return (
    <article>
      {/*       {Object.values(horoscopo).map((el) => {
        console.log(el);
      })} */}
      <Signo fsigno={form.date} /> Hola: "{form.name}" horoscopo Faltan{" "}
      <Fecha cumpleanos={form.date} />
      dias para tu cumpleaños
      <ul>
      <ListarHoroscopo />

      </ul>
    </article>
  );
};

export default Horoscopo;
