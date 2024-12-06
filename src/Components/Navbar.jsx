import React from 'react'
import { Link } from "react-router-dom";
import { paths } from "./utils/path";
import { useContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { Data, dispatch } = useContextGlobal();
  const changeTheme = () => {
    const theme  = Data.theme
    if (theme   === "dark") {
      dispatch({ type: "change_theme", payload: "light" });
    } else {
      dispatch({ type: "change_theme", payload: "dark" });
    }
  }

  return (
    <nav className="nav">
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={`${paths.home}`}>
        <h2>Home</h2>  
      </Link>
      <Link to={`${paths.Contacto}`}>
        <h2>Contacto</h2>  
      </Link>
      <Link to={`${paths.Destacados}`}>
        <h2>Favs</h2>  
      </Link>

      <button className="themeButton" onClick={changeTheme}>
        {Data.theme === "dark" ? ("☀️") : ("🌙")}</button>
    </nav>
  )
}

export default Navbar