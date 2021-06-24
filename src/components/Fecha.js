import React from "react";

const Fecha = ({ cumpleanos }) => {
  const dias = (date) => {
    var today = new Date();
    var birthday = new Date(date); // Establece día y mes
    birthday.setFullYear(today.getFullYear()); // Establece año a este año
    var msPerDay = 24 * 60 * 60 * 1000; // Número de milisegundos por día
    var daysleft = (birthday.getTime() - today.getTime()) / msPerDay;
    return (daysleft = Math.round(daysleft)); // devuelve los días que quedan en el año
    //console.log(daysleft);
  };

  return <>"{dias(cumpleanos)}" </>;
};

export default Fecha;
