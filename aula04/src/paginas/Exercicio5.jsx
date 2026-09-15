import { useState } from "react";
import { Link } from "react-router-dom";

export default function Quadrado() {
  const [lado, setLado] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularArea(e) {
    e.preventDefault();

    let area;
    let l = Number(lado);

    area = l * l;

    setResultado(<p>A área do quadrado é = {area.toFixed(2)}</p>);
  }

  return (
    <div>
      <h1>Exercício: Área do Quadrado</h1>

      <div className="conteudo">
        <form onSubmit={calcularArea}>
          <p>Digite o valor do lado do Quadrado</p>

          <p>
            <input 
              type="text" 
              value={lado} 
              onChange={(e) => setLado(e.target.value)} 
            />
          </p>

          <p>
            <input type="submit" value="Calcular" />
          </p>
          {resultado}
        </form>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  );
}
