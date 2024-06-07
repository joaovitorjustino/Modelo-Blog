import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/inicio";
import SobreMim from "./componentes/sobremim";
import Menu from "./componentes/menu";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
