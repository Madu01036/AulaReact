import { useState } from "react";
import { Link } from "react-router-dom";

export default function Exercicio3() {
  const [valor, setValor] = useState("");
  const [taxa, setTaxa] = useState("");
  const [tempo, setTempo] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularParcela(e) {
    e.preventDefault();

    let valorParcela;
    let v = Number(valor);
    let tax = Number(taxa);
    let temp = Number(tempo);

    valorParcela = v + v * (Math.pow(tax, 2) / 100) * temp;

    setResultado(
      <p>Valor da parcela atualizado = R$ {valorParcela.toFixed(2)}</p>
    );
  }

  return (
    <div>
      <h1>Exercício 3</h1>
      <div className="conteudo">
        <form onSubmit={calcularParcela}>
          <p>Digite o valor da prestação</p>
          <p>
            <input
              type="text"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </p>

          <p>Digite a taxa de juros (%)</p>
          <p>
            <input
              type="text"
              value={taxa}
              onChange={(e) => setTaxa(e.target.value)}
            />
          </p>

          <p>Digite o tempo de dias de atraso</p>
          <p>
            <input
              type="text"
              value={tempo}
              onChange={(e) => setTempo(e.target.value)}
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
