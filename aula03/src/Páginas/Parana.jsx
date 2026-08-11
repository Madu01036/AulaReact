import { Link } from "react-router-dom";

export default function Parana() {
  return (
    <div>
      <h1>Estado do Paraná</h1>
      <div className="conteudo">
        <img src="/PR.png" />

        <p>
          Paraná (PR) é um estado localizado na Região Sul do Brasil que se
          destaca pela agricultura, pela indústria, pelo comércio e pela
          produção de energia. Sua capital, Curitiba, é conhecida pela
          organização urbana, pelos parques e pela qualidade de vida, formando
          uma importante região metropolitana. O estado também é reconhecido
          pelas Cataratas do Iguaçu, uma das principais atrações turísticas do
          país, além de suas belas paisagens naturais, áreas de preservação
          ambiental e diversidade cultural, que contribuem para o
          desenvolvimento do turismo e da economia.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  );
}
