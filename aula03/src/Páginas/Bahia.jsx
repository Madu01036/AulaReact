import { Link } from "react-router-dom";

export default function Bahia() {
  return (
    <div>
      <h1>Estado da Bahia</h1>
      <div className="conteudo">
        <img src="/BA.png" />

        <p>
          Bahia (BA) é um estado localizado na Região Nordeste do Brasil que se
          destaca pela agricultura, pela indústria, pelo comércio, pelo turismo
          e pela riqueza cultural. Sua capital, Salvador, é conhecida por sua
          história, arquitetura, música e manifestações culturais. O estado
          também possui extensas áreas litorâneas, belas praias e importantes
          patrimônios históricos, além de uma culinária e tradições que refletem
          a diversidade de sua população.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
