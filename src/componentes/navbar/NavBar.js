import React from "react"
import icono from "./icono";

const componentes = {
  icono: icono
}

function NavBar(props) {
    return(
        <navBar>
          <componentes.icono></componentes.icono>
          <ul className="menu"> 
            <li className="lista"> <a href="#">Inicio</a> </li>
            <li className="lista"> <a href="#">Nosotros</a> </li>
            <li className="lista"> <a href="#"> Contacto</a> </li>
          </ul>
        </navBar>
      )
}

export default NavBar;