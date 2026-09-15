import { Link } from "react-router-dom";
import { useState } from "react";

export default function Triangulo() {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularArea(e) {
    e.preventDefault();
    let b = Number(base);
    let a = Number(altura);
    let area = (b * a) / 2;
    setResultado(`A área do triângulo é = ${area.toFixed(2)}`);
  }

  return (
    <div>
      <h1>Exercício: Área do Triângulo</h1>
      <div className="conteudo">
        <form onSubmit={calcularArea}>
          <p>Digite o valor da base do Triângulo</p>
          <p>
            <input 
              type="number" 
              value={base} 
              onChange={(e) => setBase(e.target.value)} 
            />
          </p>
          <p>Digite o valor da altura do Triângulo</p>
          <p>
            <input 
              type="number" 
              value={altura} 
              onChange={(e) => setAltura(e.target.value)} 
            />
          </p>
          <p>
            <input type="submit" value="Calcular" />
          </p>
          {resultado && <p>{resultado}</p>}
        </form>
        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  );
}
