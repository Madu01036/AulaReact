import { Link } from "react-router-dom";

export default function MatoGrossoSul() {
  return (
    <div>
      <h1>Estado do Mato Grosso do Sul</h1>
      <div className="conteudo">
        <img src="/MS.png" />

        <p>
          Mato Grosso do Sul (MS) é um estado localizado na Região Centro-Oeste
          do Brasil que se destaca pela agropecuária, pela produção de energia,
          pelo comércio e pelo turismo. Sua capital, Campo Grande, é o principal
          centro econômico e urbano do estado. A região também é conhecida pelo
          Pantanal, por rios de águas cristalinas e pela grande diversidade de
          animais e plantas, tornando o ecoturismo uma importante atividade.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
