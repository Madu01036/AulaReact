import { Link } from "react-router-dom";

export default function RioGrandeNorte() {
  return (
    <div>
      <h1>Estado do Rio Grande do Norte</h1>
      <div className="conteudo">
        <img src="/RN.png" />

        <p>
          Rio Grande do Norte (RN) é um estado localizado na Região Nordeste do
          Brasil que se destaca pelo turismo, pela agricultura, pela produção de
          sal e pela energia eólica. Sua capital, Natal, é conhecida por suas
          praias, dunas e paisagens naturais. O estado também possui um extenso
          litoral, com praias e falésias, além de áreas de grande importância
          ambiental que atraem visitantes de diferentes regiões.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
