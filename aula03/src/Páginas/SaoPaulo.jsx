import { Link } from "react-router-dom";

export default function SaoPaulo() {
  return (
    <div>
      <h1>Estado de São Paulo</h1>
      <div className="conteudo">
        <img src="/SP.png" />

        <p>
          São Paulo (SP) é o estado mais populoso e economicamente desenvolvido
          do Brasil, destacando-se como um importante centro financeiro,
          industrial, comercial e tecnológico. Sua capital, a cidade de São
          Paulo, é a maior metrópole da América Latina e exerce grande
          influência nacional e internacional. Além da força econômica, o estado
          possui ampla diversidade cultural, infraestrutura avançada e
          importantes polos de educação, pesquisa e inovação.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
        
      </div>
    </div>
  );
}
