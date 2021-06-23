import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Horoscopo = () => {
  let { form } = useParams();
  form = JSON.parse(form);
  console.log(form);

  let nacimiento, hoy, diasRestantes, dias, horas, minutos, segundos, imprimir;
  const tiempodeEspera = (valor) => {
    console.log("valor", valor);
    hoy = new Date().getTime(); //fecha de hoy
    nacimiento = new Date(valor).getTime(); //mi fecha de nacimiento

    diasRestantes = hoy - nacimiento;

    let contador = setInterval(() => {
      dias = Math.floor(diasRestantes / (1000 * 60 * 60 * 24));

      horas = (
        "0" +
        Math.floor((diasRestantes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2);
      //le contateno un cero para cuando el valor este entre 9 y 1, se lo quito con numeros de 3 decimas como del 11 al 59 (059)
      minutos = (
        "0" + Math.floor((diasRestantes % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2);

      segundos = ("0" + Math.floor((diasRestantes % (1000 * 60)) / 1000)).slice(
        -2
      );

      console.log(
        `Faltan:  dias: ${dias}, horas: ${horas},  minutos: ${minutos},  segundos: ${segundos}`
      );
      if (diasRestantes < 0) {
        clearInterval(contador);
        document.body.innerHTML = `<b>Faltan: dias: ${dias}, horas: ${horas}, minutos: ${minutos}, segundos: ${segundos}</b>`;
      }
    }, 1000);

    return contador;
  };
  //const [horoscopo, setHoroscopo] = useState({});

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

  return (
    <article>
      {/*       {Object.values(horoscopo).map((el) => {
        console.log(el);
      })} */}
      [foto del signo] Hola: "{form.name}" horoscopo Faltan{" "}
      {tiempodeEspera(form.date)} dias para tu cumpleaños
    </article>
  );
};

export default Horoscopo;
