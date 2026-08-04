import { Link } from "react-router-dom";


export default function EspiritoSanto() {
  return (
    <div>
      <h1>Estado do Espírito Santo</h1>
      <div className="conteudo">
        <img src="/ES.png" />

        <p>
          Espírito Santo (ES) é um estado litorâneo que se destaca pela
          importância de seus portos, pela produção de rochas ornamentais, pela
          agricultura e pela indústria. Sua capital, Vitória, está localizada em
          uma ilha e forma, junto aos municípios vizinhos, uma importante região
          metropolitana. O estado também é reconhecido por suas belas praias,
          montanhas e áreas de preservação ambiental, que impulsionam o turismo
          e a qualidade de vida.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  );
}
