import { Link } from "react-router-dom";


export default function RioJaneiro() {
  return (
    <div>
      <h1>Estado do Rio de Janeiro</h1>
      <div className="conteudo">
        <img src="/RJ.png" />

        <p>
          Rio de Janeiro (RJ) é mundialmente conhecido por suas paisagens
          naturais, que combinam praias, montanhas e florestas, além de sua
          intensa vida cultural. A capital abriga importantes cartões-postais,
          como o Cristo Redentor e o Pão de Açúcar, sendo um dos principais
          destinos turísticos do país. O estado possui uma economia
          diversificada, com destaque para os setores de petróleo e gás,
          turismo, comércio e serviços, desempenhando papel estratégico no
          cenário nacional.
        </p>
        
         <p>
          <Link to="/">Voltar</Link>
        </p>
        
      </div>
    </div>
  );
}
