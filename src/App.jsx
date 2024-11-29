
import { paths } from "./utils/path";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Detail from "./Pages/Detail";
import Favs from "./Pages/Favs";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path={paths.home} element={<Home />} />
            <Route path={paths.Contacto} element={<Contact />} />
            <Route path={paths.Detalles} element={<Detail />} />
            <Route path={paths.Destacados} element={<Favs />} />
            <Route
              path={paths.notFound}
              element={<h1>Page not found - Error 404</h1>}
            />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
