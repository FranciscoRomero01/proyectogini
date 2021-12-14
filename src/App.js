import './App.css';
import React from 'react';
import NavBar from './componentes/navbar/NavBar';
import ItemsListconteiner from './componentes/items/ItemListconteiner';

const componentes = {
  inicio: ItemsListconteiner
}

function App() {
  return (
    <div className="App">
        <NavBar/>
        <componentes.inicio></componentes.inicio>
    </div>
  );
}

export default App;