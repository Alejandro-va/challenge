import React from 'react'

const ListarHoroscopo = (props) => {
   const [zodiaco, setZodiaco] = React.useState({})
   const url = "https://api.adderou.cl/tyaas/"

   React.useEffect(()=>{
      getHotoscopo(url)
   },[])

   const getHotoscopo = async (url) =>{
      let res = await fetch(url)
      let data = await res.json()
      console.log(data.horoscopo)
      setZodiaco(data.horoscopo)
   }

 /*   const pintar = (datos) =>{
      Object.values(datos).map((el)=>console.log(el))
   } */

   const fragment = document.createDocumentFragment()
   const $ul = document.querySelector('ul')
   return (
      <div>
         {
            Object.values(zodiaco).map((el)=>{
               console.log(el.nombre)
               if(el.nombre==='aries'){
                  const $li = document.createElement('li')
                  $li.innerHTML = el.amor
                  fragment.appendChild($li)
                  console.log($li)
               }
               $ul.appendChild(fragment)
            })
         }
      </div>
   )
}

export default ListarHoroscopo
