import React, { useState } from 'react'
import './App.css';

function App() {
  const [personaje, setPersonaje] = useState();
  const [existe, setExiste] = useState(false);


  const onClick = () => {

    const busqueda = document.getElementById('search').value;
    console.log(busqueda)
    const fetchApi = async (inputPersonaje) => {
      const url = `https://thesimpsonsquoteapi.glitch.me/quotes?character=${inputPersonaje}`

      const response =await fetch(url);
      const data = await response.json()
      if(data.length === 0){
        console.log('True')
        setExiste(false)
      } else {
        console.log('True')
        setPersonaje(data);
        setExiste(true)
      } 
      
      /* console.log(data) */
    }
    fetchApi(busqueda)
  };
  console.log(existe)

  return (
    <div className='App'>
      <input placeholder="Buscar personaje..." id='search' className='inputSearch' />
      <button onClick={onClick} className='inputSearch-button'>Buscar</button>
      
      <h1>{existe===false ? 'Buscando... o no se encontro el personaje' : personaje[0].character}</h1>
      <img src={existe===false ? 'Cargando imagen del personaje...' : personaje[0].image} alt=""/>
    </div>
  );

    


  
}


export default App;
