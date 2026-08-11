import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div>
      <h1>Aula 03 - Estudo de Rotas</h1>

      <div className="conteudo">
        <h3> Região Norte</h3>
        <ul>
          <li>
            <Link to="/estados/ac">Acre</Link>
          </li>
          <li>
            <Link to="/estados/ap">Amapá</Link>
          </li>
          <li>
            <Link to="/estados/am">Amazonas</Link>
          </li>
          <li>
            <Link to="/estados/pa">Pará</Link>
          </li>
          <li>
            <Link to="/estados/ro">Rondônia</Link>
          </li>
          <li>
            <Link to="/estados/rr">Roraima</Link>
          </li>
          <li>
            <Link to="/estados/to">Tocantins</Link>
          </li>
        </ul>
      </div>

      <div className="conteudo">
        <h3> Região Nordeste</h3>
        <ul>
          <li>
            <Link to="/estados/al">Alagoas</Link>
          </li>
          <li>
            <Link to="/estados/ba">Bahia</Link>
          </li>
          <li>
            <Link to="/estados/ce">Ceará</Link>
          </li>
          <li>
            <Link to="/estados/ma">Maranhão</Link>
          </li>
          <li>
            <Link to="/estados/pb">Paraíba</Link>
          </li>
          <li>
            <Link to="/estados/pe">Pernambuco</Link>
          </li>
          <li>
            <Link to="/estados/pi">Piauí</Link>
          </li>
          <li>
            <Link to="/estados/rn">Rio Grande do Norte</Link>
          </li>
          <li>
            <Link to="/estados/se">Sergipe</Link>
          </li>
          <li>
            <Link to="/estados/pi">Piauí</Link>
          </li>
        </ul>
      </div>

      <div className="conteudo">
        <h3> Região Sudeste</h3>
        <ul>
          <li>
            <Link to="/estados/sp">São Paulo</Link>
          </li>
          <li>
            <Link to="/estados/mg">Minas Gerais</Link>
          </li>
          <li>
            <Link to="/estados/rj">Rio de Janeiro</Link>
          </li>
          <li>
            <Link to="/estados/es">Espírito Santo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
