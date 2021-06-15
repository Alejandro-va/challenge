# CHALLENGE

Es una aplicación web con la tecnología React planteada con el concepto “mobile first”.

Para realizar esta aplicación en su pantalla inicial consume la api [RANDOM USER GENERATOR](https://randomuser.me/api/)

---

Utiliza react-router-dom

---

Para guardar los datos de usuario se utilizó un api fake [{JASON} PlaceHolder](https://jsonplaceholder.typicode.com/).

para correrla hay que levantar el servidor desde la consola, dandole la ruta de la carpeta donde se creo el db.json y el numero de puerto( que no debe ser coincidente con el de react), en este caso recomiendo el 5500.

comando para levantar el servidor:

`json-server -w -p 5000 src/api/db.json`

Nota: este servidor agrega los id consecutivos por si mismo.

---
