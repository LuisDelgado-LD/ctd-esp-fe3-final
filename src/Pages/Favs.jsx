import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favList = JSON.parse(localStorage.getItem("favList")) || [];
  const output = () => {
    if (favList.length == 0)
      return <h2>Aún no tienes favoritos marcados</h2>
    else
    return favList.map((Dentist) => (
      <Card key={Dentist.id} dentist={Dentist}> 
        <h4>{Dentist.email}</h4>
      </Card>
    ))
  }
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {output()}
      </div>
    </>
  );
};

export default Favs;
