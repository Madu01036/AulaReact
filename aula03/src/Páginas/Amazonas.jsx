import { Link } from "react-router-dom";

export default function Amazonas() {
  return (
    <div>
      <h1>Estado do Amazonas</h1>
      <div className="conteudo">
        <img src="/AM.png" />

        <p>
          Amazonas (AM) é um estado localizado na Região Norte do Brasil que se
          destaca pela extensa cobertura da Floresta Amazônica, pela
          biodiversidade, pelos rios e pelo turismo ecológico. Sua capital,
          Manaus, é o principal centro urbano e econômico do estado, além de
          abrigar o famoso Teatro Amazonas. O estado também é conhecido pelos
          grandes rios, pelas comunidades tradicionais e por importantes áreas
          de preservação ambiental, que contribuem para a economia e para a
          valorização da natureza.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
