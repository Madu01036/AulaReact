import { Link } from "react-router-dom";

export default function Roraima() {
  return (
    <div>
      <h1>Estado de Rondonia</h1>
      <div className="conteudo">
        <img src="/RR.png" />

        <p>
          Roraima (RR) é um estado localizado na Região Norte do Brasil que se
          destaca pelas paisagens naturais, pela pecuária, pela agricultura e
          pelo potencial turístico. Sua capital, Boa Vista, é a principal cidade
          e está situada às margens do rio Branco. O estado também é conhecido
          pelo Monte Roraima, pelas extensas áreas de savana e pela presença de
          diversas comunidades indígenas, que contribuem para sua riqueza
          cultural e ambiental.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
