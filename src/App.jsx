
import { paths } from "./Components/utils/path";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Detail from "./Pages/Detail";
import Favs from "./Pages/Favs";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { useContextGlobal } from "./Components/utils/global.context";


function App() {
  const theme = useContextGlobal().Data.theme;
  return (
      <div className={`App ${theme === "dark"? "dark": "light"}`}>
          <Routes>
            <Route path={paths.home} element={<Layout />} >
              <Route path={paths.home} element={<Home />} />
              <Route path={paths.Contacto} element={<Contact />} />
              <Route path={paths.DetallesDinamico} element={<Detail />} />
              <Route path={paths.Destacados} element={<Favs />} />
              <Route
                path={paths.notFound}
                element={<h1>Page not found - Error 404</h1>}
              />
            </Route>
          </Routes>
      </div>
  );
}

export default App;
