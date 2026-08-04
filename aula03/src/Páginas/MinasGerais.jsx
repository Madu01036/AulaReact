import { Link } from "react-router-dom";


export default function MinasGerais() {
  return (
    <div>
      <h1>Estado de Minas Gerais</h1>
      <div className="conteudo">
        <img src="/MG.png" />

        <p>
          Minas Gerais (MG) é conhecido por sua rica história, marcada pelo
          ciclo do ouro e pelo patrimônio cultural preservado em cidades
          históricas como Ouro Preto, Tiradentes e Diamantina. O estado possui
          uma economia diversificada, com destaque para a mineração, a
          agropecuária, a indústria e o turismo. Sua culinária típica,
          hospitalidade e tradições culturais fazem de Minas Gerais uma das
          principais referências da identidade brasileira.
        </p>

         <p>
          <Link to="/">Voltar</Link>
        </p>

      </div>
    </div>
  );
}
