import { Link } from "react-router-dom";

export default function Sergipe() {
  return (
    <div>
      <h1>Estado do Sergipe</h1>
      <div className="conteudo">
        <img src="/SE.png" />

        <p>
          Sergipe (SE) é um estado localizado na Região Nordeste do Brasil que
          se destaca pela agricultura, pela indústria, pelo comércio e pelo
          turismo. Sua capital, Aracaju, é conhecida por suas praias, orla
          organizada e qualidade de vida. O estado também possui paisagens
          formadas por rios, manguezais e áreas litorâneas, além de uma rica
          cultura popular marcada por festas, culinária e tradições regionais.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
