import React from "react";
import { Link, useLocation } from "react-router-dom";
import { paths } from "./utils/path";
import { useContextGlobal } from "../Components/utils/global.context";



const Card = ({ name, username, id }) => {
  const { dispatch } = useContextGlobal();
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: "add_favs_local", payload: id   });
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`${paths.DetallesEstatico}${id}`}>
        <h2>{name}</h2>
        <h3>{username}</h3> 
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
