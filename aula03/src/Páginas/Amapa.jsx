import { Link } from "react-router-dom";

export default function Amapa() {
  return (
    <div>
      <h1>Estado do Amapá</h1>
      <div className="conteudo">
        <img src="/AP.png" />

        <p>
          Amapá (AP) é um estado localizado na Região Norte do Brasil que se
          destaca pela preservação da Amazônia, pela biodiversidade, pela
          mineração e pelo extrativismo. Sua capital, Macapá, é a principal
          cidade do estado e está localizada às margens do rio Amazonas. O
          estado também é conhecido por suas áreas de floresta, rios e unidades
          de conservação, além de abrigar o Parque Nacional Montanhas do
          Tumucumaque e possuir uma rica diversidade cultural, que contribui
          para o turismo e a preservação ambiental.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
