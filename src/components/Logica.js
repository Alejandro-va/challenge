import React, {useState, useEffect} from 'react'
import { helpHttp } from '../helpHttp';

const Logica = () => {


   const createData = (dform) => {
      dform.id = Date.now()//id
      console.log(dform)
      api.post(url, {body: dform}).then((res) =>{
         console.log(res);
         setData([...data, res])//es un array pq estoy guardando el registro completo dentro de un array, osea dentro del api
      })
     }



   //metodo GET
/*   let api = helpHttp();
  let url = 'http://localhost:5000/horoscopo';

  useEffect(() => {
   api.get(url).then((res) => {
      console.log(res)
      if(!res.err){
         setData(res)
      }else{
         setData()
      }
   })
  }, []) */


/* 

  const createData = (form)=>{
   data.id = Date.now()

   api.post(url, {body:data}).then((res)=>{
      console.log(res)
   })
   setData([...data, res])
}
 */



   return (
      <div>
         
      </div>
   )
}

export default Logica
