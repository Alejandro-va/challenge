import React from "react";
import Aries from "../image/boton_aries.png";
import Tauro from "../image/boton_tauro.png";
import Geminis from "../image/boton_geminis.png";
import Cancer from "../image/boton_cancer.png";
import Leo from "../image/boton_leo.png";
import Virgo from "../image/boton_virgo.png";
import Libra from "../image/boton_libra.png";
import Escorpio from "../image/boton_escorpio.png";
import Sagitario from "../image/boton_sagitario.png";
import Capricornio from "../image/boton_capricornio.png";
import Acuario from "../image/boton_acuario.png";
import Piscis from "../image/boton_piscis.png";

const signo = ({ fsigno }) => {
  let prin;
  const zodiaco = (fsigno) => {
    var birthday = new Date(fsigno); //CUMPLAÑOS USUARIO
    var today = new Date();

    birthday.setFullYear(today.getFullYear());

    //Aries
    let ariesDesde = new Date("2021-03-21");
    let ariesHasta = new Date("2021-04-20");
    //Tauro
    let tauroDesde = new Date("2021-04-21");
    let tauroHasta = new Date("2021-05-20");
    //Geminis
    let geminisDesde = new Date("2021-05-21");
    let geminisHasta = new Date("2021-06-21");
    //Cancer
    let cancerDesde = new Date("2021-06-22");
    let cancerHasta = new Date("2021-07-22");
    //Leo
    let leoDesde = new Date("2021-07-23");
    let leoHasta = new Date("2021-08-22");
    //Virgo
    let virgoDesde = new Date("2021-08-23");
    let virgoHasta = new Date("2021-09-22");
    //Libra
    let libraDesde = new Date("2021-09-23");
    let libraHasta = new Date("2021-10-22");
    //Escorpio
    let escorpioDesde = new Date("2021-10-23");
    let escorpioHasta = new Date("2021-11-22");
    //Sagitario
    let sagitarioDesde = new Date("2021-11-23");
    let sagitarioHasta = new Date("2021-12-20");
    //Capricornio
    let capricornioDesde = new Date("2021-12-21");
    let capricornioHasta = new Date("2022-01-20");
    //Acuario
    let acuarioDesde = new Date("2021-01-21");
    let acuarioHasta = new Date("2021-02-19");
    //Picis
    let picisDesde = new Date("2021-02-20");
    let picisHasta = new Date("2021-03-20");

    if (
      birthday.getTime() >= ariesDesde.getTime() &&
      birthday.getTime() <= ariesHasta.getTime()
    )
      return <img src={Aries} />;
    if (
      birthday.getTime() >= tauroDesde.getTime() &&
      birthday.getTime() <= tauroHasta.getTime()
    )
      return <img src={Tauro} />;
    if (
      birthday.getTime() >= geminisDesde.getTime() &&
      birthday.getTime() <= geminisHasta.getTime()
    )
      return <img src={Geminis} />;
    if (
      birthday.getTime() >= cancerDesde.getTime() &&
      birthday.getTime() <= cancerHasta.getTime()
    )
      return <img src={Cancer} />;
    if (
      birthday.getTime() >= leoDesde.getTime() &&
      birthday.getTime() <= leoHasta.getTime()
    )
      return <img src={Leo} />;
    if (
      birthday.getTime() >= virgoDesde.getTime() &&
      birthday.getTime() <= virgoHasta.getTime()
    )
      return <img src={Virgo} />;
    if (
      birthday.getTime() >= libraDesde.getTime() &&
      birthday.getTime() <= libraHasta.getTime()
    )
      return <img src={Libra} />;
    if (
      birthday.getTime() >= escorpioDesde.getTime() &&
      birthday.getTime() <= escorpioHasta.getTime()
    )
      return <img src={Escorpio} />;
    if (
      birthday.getTime() >= sagitarioDesde.getTime() &&
      birthday.getTime() <= sagitarioHasta.getTime()
    )
      return <img src={Sagitario} />;
    if (
      birthday.getTime() >= capricornioDesde.getTime() &&
      birthday.getTime() <= capricornioHasta.getTime()
    )
      return <img src={Capricornio} />;
    if (
      birthday.getTime() >= acuarioDesde.getTime() &&
      birthday.getTime() <= acuarioHasta.getTime()
    )
      return <img src={Acuario} />;
    if (
      birthday.getTime() >= picisDesde.getTime() &&
      birthday.getTime() <= picisHasta.getTime()
    )
      return <img src={Piscis} />;
  };
  return <div>{zodiaco(fsigno)}</div>;
};

export default signo;
