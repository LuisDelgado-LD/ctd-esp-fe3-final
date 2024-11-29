
import { paths } from "./utils/path";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contacto from "./Pages/Contacto";
import Detalles from "./Pages/Detalles";
import Destacados from "./Pages/Destacados";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path={paths.home} element={<Home />} />
            <Route path={paths.Contacto} element={<Contacto />} />
            <Route path={paths.Detalles} element={<Detalles />} />
            <Route path={paths.Destacados} element={<Destacados />} />
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
