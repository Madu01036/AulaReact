import { useState } from "react";
import { Link } from "react-router-dom";

export default function Exercicio1() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState(null);

  function calcular(e) {
    e.preventDefault();
    const num = Number(numero);

    const quadrado = num * num;
    const cubo = num * num * num;

    setResultado(
      <div>
        <p>
          {num}
          <sup>2</sup> = {quadrado}
        </p>
        <p>
          {num}
          <sup>3</sup> = {cubo}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Exercício 1</h1>
      <div className="conteudo">
        <form onSubmit={calcular}>
          <p>Digite qualquer número</p>
          <p>
            <input
              type="number"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </p>
          <p>
            <input type="submit" value="Calcular" />
          </p>
          <div className="resultado-container">{resultado}</div>
        </form>
        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  );
}
