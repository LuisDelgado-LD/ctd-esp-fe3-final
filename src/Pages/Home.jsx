import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {Data} = useContextGlobal();
  return (
    <main className="" >
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {Data.dentists.map((Dentist) => (
          <Card key={Dentist.id} dentist={Dentist}/>
        ))}
      </div>
    </main>
  )
}

export default Home