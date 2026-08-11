import { Link } from "react-router-dom";

export default function Goias() {
  return (
    <div>
      <h1>Estado de Goiás</h1>
      <div className="conteudo">
        <img src="/GO.png" />

        <p>
          Goiás (GO) é um estado localizado na Região Centro-Oeste do Brasil que
          se destaca pela agricultura, pela pecuária, pela indústria e pelo
          turismo. Sua capital, Goiânia, é um importante centro econômico e
          urbano da região, conhecida por suas áreas verdes e planejamento
          urbano. O estado também possui paisagens de cerrado, cachoeiras e
          cidades históricas, além de atrações naturais que impulsionam o
          turismo.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
