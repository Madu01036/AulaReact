import { Link } from "react-router-dom";

export default function Pernambuco() {
  return (
    <div>
      <h1>Estado de Pernambuco</h1>
      <div className="conteudo">
        <img src="/PE.png" />

        <p>
          Pernambuco (PE) é um estado localizado na Região Nordeste do Brasil
          que se destaca pelo comércio, pela indústria, pela agricultura, pelo
          turismo e pela cultura. Sua capital, Recife, é um importante centro
          econômico e cultural, conhecido por seus rios, pontes e praias. O
          estado também é reconhecido por cidades históricas, como Olinda, pelo
          carnaval, pelo frevo e por suas belas paisagens litorâneas.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
