import React, {useState} from 'react'

const MiprimerComponente = () => {

  //let nombre = "RB";
  let instituto = "CIISA";
  let clases = [
    "Programacion Basica",
    "Programacion Avanzada",
    "BD"
  ];  

  const [nombre, setnombre] = useState("Raul Bilbao");

  const cambiarNombre = (nuevoNombre) => {
    setnombre(nuevoNombre);
  }  

  return (
    <div>
      MiprimerComponente <br></br>    
      Mi nombre es: {nombre} <br></br>    
      Mi instituto es: {instituto} <br></br> 

      <button onClick={ e => cambiarNombre("RB")}>
        Cambiar Nombre
      </button>    <br></br>   

      <input type='text' onChange={e => cambiarNombre(e.target.value)} placeholder='Cambia el nombre'></input>       

      Cursos:
      {
        clases.map ( (clase, indice) => {
          return (
            <li key={indice}>{clase}</li>
          )
        })
      }
      
    </div>
  )
}

export default MiprimerComponente
