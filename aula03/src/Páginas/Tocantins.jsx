import { Link } from "react-router-dom";

export default function Tocantins() {
  return (
    <div>
      <h1>Estado de Tocantins</h1>
      <div className="conteudo">
        <img src="/TO.png" />

        <p>
          Tocantins (TO) é um estado localizado na Região Norte do Brasil que se
          destaca pela agricultura, pela pecuária, pelo turismo e pela riqueza
          de seus recursos naturais. Sua capital, Palmas, é uma cidade planejada
          e está localizada próxima ao lago de Palmas. O estado também é
          conhecido pelo Jalapão, por suas cachoeiras, rios e paisagens de
          cerrado, que atraem visitantes e impulsionam o turismo.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
