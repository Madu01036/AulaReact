import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Páginas/Home";

import Acre from "./Páginas/Acre";
import Amapa from './Páginas/Amapa';
import Amazonas from "./Páginas/Amazonas";
import Para from "./Páginas/Para"; // Corrigido de Parana para Para
import Rondonia from './Páginas/Rondonia';
import Roraima from './Páginas/Roraima';
import Tocantins from './Páginas/Tocantins';

import Alagoas from './Páginas/Alagoas';
import Bahia from './Páginas/Bahia';
import Ceara from './Páginas/Ceara';
import Maranhao from './Páginas/Maranhao';
import Paraiba from './Páginas/Paraiba';
import Pernambuco from './Páginas/Pernambuco';
import Piaui from './Páginas/Piaui';
import RioGrandeNorte from './Páginas/RioGrandeNorte';
import Sergipe from './Páginas/Sergipe';

import EspiritoSanto from './Páginas/EspiritoSanto';
import MinasGerais from './Páginas/MinasGerais';
import RioJaneiro from './Páginas/RioJaneiro';
import SaoPaulo from './Páginas/SaoPaulo';

import Parana from './Páginas/Parana';
import RioGrandeSul from './Páginas/RioGrandeSul';
import SantaCatarina from './Páginas/SantaCatarina';

import DistritoFederal from './Páginas/DistritoFederal';
import Goias from './Páginas/Goias';
import MatoGrosso from './Páginas/MatoGrosso';
import MatoGrossoSul from './Páginas/MatoGrossoSul';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estados/ac" element={<Acre />} />
        <Route path="/estados/ap" element={<Amapa />} />
        <Route path="/estados/am" element={<Amazonas />} />
        <Route path="/estados/pa" element={<Para />} />
        <Route path="/estados/ro" element={<Rondonia />} />
        <Route path="/estados/rr" element={<Roraima />} />
        <Route path="/estados/to" element={<Tocantins />} />
        <Route path="/estados/al" element={<Alagoas />} />
        <Route path="/estados/ba" element={<Bahia />} />
        <Route path="/estados/ce" element={<Ceara />} />
        <Route path="/estados/ma" element={<Maranhao />} />
        <Route path="/estados/pb" element={<Paraiba />} />
        <Route path="/estados/pe" element={<Pernambuco />} />
        <Route path="/estados/pi" element={<Piaui />} />
        <Route path="/estados/rn" element={<RioGrandeNorte />} />
        <Route path="/estados/se" element={<Sergipe />} />
        <Route path="/estados/es" element={<EspiritoSanto />} />
        <Route path="/estados/mg" element={<MinasGerais />} />
        <Route path="/estados/rj" element={<RioJaneiro />} />
        <Route path="/estados/sp" element={<SaoPaulo />} />
        <Route path="/estados/pr" element={<Parana />} />
        <Route path="/estados/rs" element={<RioGrandeSul />} />
        <Route path="/estados/sc" element={<SantaCatarina />} />
        <Route path="/estados/df" element={<DistritoFederal />} />
        <Route path="/estados/go" element={<Goias />} />
        <Route path="/estados/mt" element={<MatoGrosso />} />
        <Route path="/estados/ms" element={<MatoGrossoSul />} />
        
      </Routes>
    </BrowserRouter>
  );
}
