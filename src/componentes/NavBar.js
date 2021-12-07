import React from "react"

function NavBar() {
    return(
        <navBar>
          <h1 className="titulo">Taller Gini</h1>
          <ul className="menu"> 
            <li className="lista"> <a href="#">Inicio</a> </li>
            <li className="lista"> <a href="#">Nosotros</a> </li>
            <li className="lista"> <a href="#"> Contacto</a> </li>
          </ul>
        </navBar>
      )
}

export default NavBar;