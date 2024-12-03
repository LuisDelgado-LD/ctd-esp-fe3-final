import React from "react";
import { Link, useLocation } from "react-router-dom";
import { paths } from "./utils/path";




const Card = ({ dentist }) => {
  const name = dentist.name
  const username = dentist.username
  const id = dentist.id
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favList = JSON.parse(localStorage.getItem("favList")) || [];
    if (!favList.some((fav) => fav.id === dentist.id)) {
      localStorage.setItem("favList", JSON.stringify([...favList,dentist]));
  }
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
