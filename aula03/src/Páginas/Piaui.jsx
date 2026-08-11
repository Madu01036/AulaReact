import { Link } from "react-router-dom";

export default function Piaui() {
  return (
    <div>
      <h1>Estado do Piauí</h1>
      <div className="conteudo">
        <img src="/PI.png" />

        <p>
          Piauí (PI) é um estado localizado na Região Nordeste do Brasil que se
          destaca pela agricultura, pela pecuária, pelo comércio e pelo turismo.
          Sua capital, Teresina, é um importante centro econômico e
          administrativo e está localizada entre os rios Parnaíba e Poti. O
          estado também é conhecido pelo Parque Nacional da Serra da Capivara,
          que reúne importantes sítios arqueológicos, além de possuir paisagens
          de cerrado e caatinga.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
