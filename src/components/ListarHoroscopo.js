import React from "react";

const ListarHoroscopo = () => {
  //console.log(signo);
  const [zodiaco, setZodiaco] = React.useState({});
  const url = "https://api.adderou.cl/tyaas/";

  React.useEffect(() => {
    getHoroscopo(url);
  }, []);

  const getHoroscopo = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    setZodiaco(data.horoscopo);
    console.log(zodiaco);
  };

  const nombre = zodiaco["acuario"].nombre;
  const amor = zodiaco["acuario"].amor;
  const color = zodiaco["acuario"].color;
  const dinero = zodiaco["acuario"].dinero;
  const fechaSigno = zodiaco["acuario"].fechaSigno;
  const numero = zodiaco["acuario"].numero;
  const salud = zodiaco["acuario"].salud;
  return (
    <>
      <ul>
        <li>Signo: {nombre}</li>
        <li>Amor: {amor}</li>
        <li>Color: {color}</li>
        <li>Diner: {dinero}</li>
        <li>Fecha de Signo: {fechaSigno}</li>
        <li>Número: {numero}</li>
        <li>Salud: {salud}</li>
      </ul>
    </>
  );
};

export default ListarHoroscopo;
