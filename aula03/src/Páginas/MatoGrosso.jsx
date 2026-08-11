import { Link } from "react-router-dom";

export default function MatoGrosso() {
  return (
    <div>
      <h1>Estado do Mato Grosso</h1>
      <div className="conteudo">
        <img src="/MT.png" />

        <p>
          Mato Grosso (MT) é um estado localizado na Região Centro-Oeste do
          Brasil que se destaca pela agricultura, pela pecuária e pela produção
          de grãos. Sua capital, Cuiabá, é um importante centro econômico e
          administrativo do estado e também funciona como porta de entrada para
          áreas naturais. O estado abriga partes do Pantanal, da Amazônia e do
          Cerrado, apresentando grande biodiversidade e potencial para o turismo
          de natureza.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
