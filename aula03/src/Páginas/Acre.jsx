import { Link } from "react-router-dom";

export default function Acre() {
  return (
    <div>
      <h1>Estado do Acre</h1>
      <div className="conteudo">
        <img src="/AC.png" />

        <p>
          Acre (AC) é um estado localizado na Região Norte do Brasil que se
          destaca pela preservação da Amazônia, pela produção agrícola, pelo
          extrativismo e pela diversidade cultural. Sua capital, Rio Branco, é o
          principal centro político, econômico e urbano do estado. O Acre também
          é conhecido por suas extensas áreas de floresta, pela produção de
          castanha e borracha e pela presença de comunidades indígenas, que
          contribuem para a riqueza cultural e ambiental da região.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
