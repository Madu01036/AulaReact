import { Link } from "react-router-dom";

export default function Ceara() {
  return (
    <div>
      <h1>Estado do Ceará</h1>
      <div className="conteudo">
        <img src="/CE.png" />

        <p>
          Ceará (CE) é um estado localizado na Região Nordeste do Brasil que se
          destaca pelo turismo, pela indústria, pela agricultura e pelo
          comércio. Sua capital, Fortaleza, é um importante centro econômico e
          turístico da região, conhecida por suas praias e pelo litoral. O
          estado também apresenta paisagens de dunas, falésias e áreas de
          sertão, além de uma cultura marcada pelo artesanato, pela música e
          pelas festas populares.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
