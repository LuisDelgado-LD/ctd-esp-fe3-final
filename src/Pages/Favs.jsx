import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favlist = JSON.parse(localStorage.getItem("favlist")) || [];
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favlist.map((Dentist) => (
          <Card key={Dentist.id} dentist={Dentist}/>
  ))}
      </div>
    </>
  );
};

export default Favs;
