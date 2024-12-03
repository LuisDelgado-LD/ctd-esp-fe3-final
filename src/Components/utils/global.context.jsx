import { createContext, useReducer } from "react";
import axios from "axios";
import { reducer } from '../../reducers/reducer'
import { useContext, useEffect } from "react";


const favlist = JSON.parse(localStorage.getItem("favlist")) || [];
export const initialState = {theme: "light", dentists: [], dentist: {}, favlist}


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

  useEffect(() => {
    localStorage.setItem("favlist", JSON.stringify(favlist));
    console.log(Data.favlist)
  }, []);
  return (
    <ContextGlobal.Provider value={{ Data, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;
export const useContextGlobal = () => useContext(ContextGlobal)
