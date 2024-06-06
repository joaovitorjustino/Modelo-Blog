import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/inicio";
import SobreMin from "./componentes/sobremim";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMin />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
