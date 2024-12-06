import {React, useState} from "react";
import { Link } from "react-router-dom";
import { paths } from "./utils/path";
import { useContextGlobal } from "../Components/utils/global.context";



const Card = ({ dentist }) => {
  const initialState = (JSON.parse(localStorage.getItem("favList"))||[]).some((fav) => fav.id === dentist.id);
  const [esFav, setFav] = useState(initialState);
  const name = dentist.name
  const username = dentist.username
  const id = dentist.id
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favList = JSON.parse(localStorage.getItem("favList"))||[]
    if (!esFav) {
      localStorage.setItem("favList", JSON.stringify([...favList,dentist]));
    } else {
      const FavsFiltrado = favList.filter(
        (fav) => fav.id !== dentist.id
      );
      localStorage.setItem("favList", JSON.stringify(FavsFiltrado));
    }
    setFav(!esFav)
  }
  
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`${paths.DetallesEstatico}${id}`}>
        <img src='/public/images/doctor.jpg'></img>
        <h2>{name}</h2>
        <h3>{username}</h3> 
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{esFav ?"Del fav":"Add fav"}</button>
    </div>
  );
};

export default Card;
