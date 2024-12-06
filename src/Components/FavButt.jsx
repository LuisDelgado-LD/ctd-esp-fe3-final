import {React, useState} from "react";

const FavButt = ({ dentist }) => {
    const initialState = (JSON.parse(localStorage.getItem("favList"))||[]).some((fav) => fav.id === dentist.id);
    const [esFav, setFav] = useState(initialState);
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
        <>
         <button onClick={addFav} className="favButton">{esFav ? "Del fav" : "Add fav"}</button>
        </>
    )
}

export default FavButt;