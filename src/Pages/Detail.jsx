import React from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios";
import { useEffect } from "react";
import { useContextGlobal } from "../Components/utils/global.context";
import Card from '../Components/Card'
import styles from '../Detail.module.css'
import FavButt from '../Components/FavButt';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const { Data, dispatch } = useContextGlobal();
  // const l = useContextGlobal();
  // console.log(l)
  const API= `https://jsonplaceholder.typicode.com/users/${id}`
  useEffect(() => {
    axios(API)
      .then((response) => {
        dispatch({ type: "get_dentist", payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const Dentista= Data.dentist
  return (
    <>
      <div className="details">
      <h1>Detail Dentist id </h1>
      <div className={styles.detailContainer}>
        <div className={styles.detailRow}>
          <Card dentist={Dentista} className={styles.card}/>
            <div className={styles.detail}>
            <h3>Correo de contacto: {Dentista.email}</h3>
            <h3>Telefono de contacto: {Dentista.phone}</h3>
            <h3>Sition web: {Dentista.website}</h3>
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
            {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
          </div>
        </div>
      </div>
      <div className={styles.favButtonContainer}>
      <FavButt dentist={Dentista} className={styles.favButton}/>
      </div>
      </div>
    </>
  )
}

export default Detail