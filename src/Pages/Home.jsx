import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {Dentists} = useContextGlobal();
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {Dentists.data.map((Dentist) => (
          <Card key={Dentist.id} name={Dentist.name}  username={Dentist.username} id={Dentist.id}/>
        ))}
      </div>
    </main>
  )
}

export default Home