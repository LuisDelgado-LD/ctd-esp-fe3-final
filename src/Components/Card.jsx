import {React, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { paths } from "./utils/path";
import FavButt from "./FavButt";


const Card = ({ dentist, children }) => {
  const locate = useLocation().pathname;
  const name = dentist.name
  const username = dentist.username
  const id = dentist.id
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
        {locate !== paths.Destacados? null:children}
        {locate !== paths.DetallesEstatico+dentist.id ? <FavButt dentist={dentist}/> : null}
    </div>
  );
};

export default Card;
