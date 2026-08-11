import { Link } from "react-router-dom";

export default function Para() {
  return (
    <div>
      <h1>Estado do Pará</h1>
      <div className="conteudo">
        <img src="/PA.png" />

        <p>
          Pará (PA) é um estado localizado na Região Norte do Brasil que se
          destaca pela produção mineral, pela agricultura, pelo extrativismo e
          pela grande diversidade natural. Sua capital, Belém, é um importante
          centro comercial e cultural da região amazônica. O estado também é
          conhecido por sua rica culinária, por seus rios e florestas e por
          abrigar importantes áreas da Amazônia, que contribuem para o turismo e
          para a economia.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
