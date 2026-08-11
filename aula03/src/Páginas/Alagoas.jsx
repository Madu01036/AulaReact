import { Link } from "react-router-dom";

export default function Alagoas() {
  return (
    <div>
      <h1>Estado de Alagoas</h1>
      <div className="conteudo">
        <img src="/AL.png" />

        <p>
          Alagoas (AL) é um estado localizado na Região Nordeste do Brasil que
          se destaca pelo turismo, pela agricultura, pela pesca e pela produção
          de cana-de-açúcar. Sua capital, Maceió, é conhecida por suas belas
          praias, águas cristalinas e piscinas naturais. O estado também possui
          uma rica cultura popular, com manifestações tradicionais, além de
          paisagens formadas por praias, rios, lagoas e áreas de preservação
          ambiental.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
