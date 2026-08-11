import { Link } from "react-router-dom";

export default function RioGrandeSul() {
  return (
    <div>
      <h1>Estado do Rio Grande do Sul</h1>
      <div className="conteudo">
        <img src="/RS.png" />

        <p>
          Rio Grande do Sul (RS) é um estado localizado na Região Sul do Brasil
          que se destaca pela agricultura, pela pecuária, pela indústria e pelo
          turismo. Sua capital, Porto Alegre, é um importante centro econômico e
          cultural da região. O estado também é conhecido pelas paisagens dos
          Pampas, pelas serras, pelos vinhedos e pela forte influência de
          diferentes grupos de imigrantes, que contribuíram para sua diversidade
          cultural e gastronômica.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
