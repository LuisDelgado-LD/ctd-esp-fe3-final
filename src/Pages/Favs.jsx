import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import { useEffect } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {Data, dispatch} = useContextGlobal();
  useEffect(() => {
    const valor = dispatch({ type: "get_favs" });
    console.log(valor)
  }, []);
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {/* {Data.dentists.map((Dentist) => (
          <Card key={Dentist.id} name={Dentist.name}  username={Dentist.username} id={Dentist.id}/>
        ))} */}
      </div>
    </>
  );
};

export default Favs;
