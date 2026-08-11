import { Link } from "react-router-dom";

export default function Paraiba() {
  return (
    <div>
      <h1>Estado da Paraíba</h1>
      <div className="conteudo">
        <img src="/PB.png" />

        <p>
          Paraíba (PB) é um estado localizado na Região Nordeste do Brasil que
          se destaca pela agricultura, pelo comércio, pelo turismo e pela
          riqueza cultural. Sua capital, João Pessoa, é conhecida por suas
          praias, áreas verdes e pelo patrimônio histórico. O estado também
          possui belas paisagens litorâneas, regiões de sertão e importantes
          manifestações culturais, como festas tradicionais, artesanato e
          música.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
