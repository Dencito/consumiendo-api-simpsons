import React, { useState } from 'react'
import './App.css';

function App() {
  const [personaje, setPersonaje] = useState();
  const [existe, setExiste] = useState(false);
  const [num, setNum] = useState(2)

  const onClick = () => {
    setNum(3)
    const busqueda = document.getElementById('search').value;
    console.log(busqueda)
    const fetchApi = async (inputPersonaje) => {
      const url = `https://thesimpsonsquoteapi.glitch.me/quotes?character=${inputPersonaje}`

      const response =await fetch(url);
      const data = await response.json()
      if(data.length === 0){
        console.log('false')
        setExiste(false)
      } else {
        console.log('true')
        setPersonaje(data);
        setExiste(true)
      } 
      
      console.log(data)
    }
    fetchApi(busqueda)
  };
  console.log(existe)

  

  return (
    <div className='App'>
      <input placeholder="Buscar personaje..." id='search' className='inputSearch' />
      <button onClick={onClick} className='inputSearch-button'>Buscar</button>
      <h1>{num===2 ? 'Busque su personaje...' : existe===false ? 'Su personaje no se encuentra': personaje[0].character}</h1>
      <img src={existe===false ? null : personaje[0].image} alt="" className='img'/>
    </div>
  );

    


  
}


export default App;
