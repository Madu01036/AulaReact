import { Link } from "react-router-dom";

export default function Rondonia() {
  return (
    <div>
      <h1>Estado de Rondonia</h1>
      <div className="conteudo">
        <img src="/RO.png" />

        <p>
          Rondônia (RO) é um estado localizado na Região Norte do Brasil que se
          destaca pela agricultura, pela pecuária, pelo extrativismo e pela
          produção de energia. Sua capital, Porto Velho, está localizada às
          margens do rio Madeira e é um importante centro econômico da região. O
          estado também possui extensas áreas de floresta amazônica, rios e
          reservas naturais, além de apresentar grande diversidade cultural
          formada por diferentes povos e comunidades.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
