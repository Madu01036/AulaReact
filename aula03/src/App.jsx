import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Páginas/Home";
import EspiritoSanto from "./Páginas/EspiritoSanto";
import MinasGerais from "./Páginas/MinasGerais";
import RioJaneiro from "./Páginas/RioJaneiro";
import SaoPaulo from "./Páginas/SaoPaulo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estados/sp" element={<SaoPaulo />} />
        <Route path="/estados/mg" element={<MinasGerais />} />
        <Route path="/estados/rj" element={<RioJaneiro />} />
        <Route path="/estados/es" element={<EspiritoSanto />} />
      </Routes>
    </BrowserRouter>
  );
}
