import React, {useState} from 'react';

/* 
  const fetchData = async () => {
    let dato = await fetch('https://api.adderou.cl/tyaas/')
    let res = await dato.json();
    console.log(res);
    setHoroscopo(res);
    console.log(horoscopo)
    zodiaco(res)
  };


  const zodiaco = (data) => {
    console.log(data)
    Object.values(data).map((el) => console.log(el))
} */

const Horoscopo = () => {
const [horoscopo, setHoroscopo] = useState({})

  //console.log(horoscopo)
  React.useEffect(() => {
    fetchData();
    console.log(horoscopo)
  }, []);

  const fetchData = async () => {
    let dato = await fetch('https://api.adderou.cl/tyaas/')
    let res = await dato.json();
    console.log(res);
    setHoroscopo(res);
    console.log(horoscopo)

  };

/*     ['acuario', 'aries',' cancer','capricornio','esporpion','geminis', 'leo', 'libra', 'picis', 'sagitario', 'tauro', 'virgo' ] */

   return (
      <article>
       {
        Object.values(horoscopo).map((el) => {
          console.log(el)
          
        })
       }
        foto del signo
        Hola: xxxxxxxx
        horoscopo
        Faltan n dias para tu cumpleaños
      </article>
   )
}

export default Horoscopo
