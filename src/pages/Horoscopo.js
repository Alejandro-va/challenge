import React from "react";
import { useParams } from "react-router-dom";
import Fecha from "../components/Fecha";
import Signo from "../components/Signo";
import ListarHoroscopo from "../components/ListarHoroscopo";

const Horoscopo = (props) => {
  let { form } = useParams();
  form = JSON.parse(form);
  console.log(form);

  return (
    <article>
      <Signo fsigno={form.date} /> Hola: "{form.name}" horoscopo Faltan
      <Fecha cumpleanos={form.date} />
      dias para tu cumpleaños
      <ul>
        <ListarHoroscopo /* signo={form.date} */ />
      </ul>
    </article>
  );
};

export default Horoscopo;
