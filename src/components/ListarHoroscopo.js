import React, { useState, useEffect } from "react";
const ListarHoroscopo = (props) => {
  const [zodiaco, setZodiaco] = useState({});
  const url = "https://api.adderou.cl/tyaas/";

  useEffect(() => {
    getHoroscopo(url);
  }, [url]);

  const getHoroscopo = async (url) => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log("DATA", data);
      setZodiaco(data.horoscopo["geminis"]);

      if (!res.err) {
      } else {
        setZodiaco(null);
      }
      /* if (!res.ok) throw { status: res.status, statusText: res.statusText }; */
      //console.log(data, res);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(zodiaco);

  // let signo = "aries";
  return (
    <>
      <ul>
        <li>Signo: {zodiaco.nombre}</li>
        <li>Amor: {zodiaco.amor}</li>
        <li>Color: {zodiaco.color}</li>
        <li>Diner: {zodiaco.dinero}</li>
        <li>Fecha de Signo: {zodiaco.fechaSigno}</li>
        <li>Número: {zodiaco.numero}</li>
        <li>Salud: {zodiaco.salud}</li>
      </ul>
    </>
  );
};

export default ListarHoroscopo;
