import { createContext, useReducer } from "react";
import axios from "axios";
import { reducer } from '../../reducers/reducer'
import { useContext, useEffect } from "react";
// import Favs from "../../Pages/Favs";


if (localStorage.getItem("favsIdList"))
  console.log("Hay items")

else
  console.log("No hay items")
const favsIdList = JSON.parse(localStorage.getItem("favsIdList"))|| [];
export const initialState = {theme: "light", dentists: [], dentist: {}, favsIdList};


export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [Data, dispatch] = useReducer(reducer, initialState);
  const API='https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    axios(API)
      .then((response) => {
        dispatch({ type: "get_list", payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ContextGlobal.Provider value={{ Data, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;
export const useContextGlobal = () => useContext(ContextGlobal)
