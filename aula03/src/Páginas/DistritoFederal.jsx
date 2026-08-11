import { Link } from "react-router-dom";

export default function DistritoFederal() {
  return (
    <div>
      <h1>Estado do Distrito Federal</h1>
      <div className="conteudo">
        <img src="/DF.png" />

        <p>
          Distrito Federal (DF) é uma unidade federativa localizada na Região
          Centro-Oeste do Brasil que se destaca por abrigar Brasília, a capital
          do país, e por concentrar importantes instituições políticas e
          administrativas. Brasília é conhecida por sua arquitetura moderna e
          pelo planejamento urbano, com diversos edifícios e monumentos de
          destaque. A região também possui áreas de cerrado, parques e espaços
          culturais, que contribuem para a preservação ambiental e para o
          turismo.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
