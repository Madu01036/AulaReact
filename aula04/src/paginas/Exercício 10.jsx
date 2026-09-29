import { useState } from "react";
import { Link } from "react-router-dom";

export default function Exercicio10() {
  const [result, setResult] = useState("");
  const [capital, setCapital] = useState("");
  const [taxa, setTaxa] = useState("");
  const [tempo, setTempo] = useState("");

  function calcular() {
    const vCapital = Number(capital);
    const vTaxa = Number(taxa);
    const vTempo = Number(tempo);

    const valorjuros = vCapital * (vTaxa / 100) * vTempo;
    const totalAtualizado = vCapital + valorjuros;

    setResult(
      <div>
        <p>Valor Capital: {Intl.NumberFormat("pt-BR").format(vCapital)}</p>
        <p>Taxa: {vTaxa}%</p>
        <p>Meses {vTempo}</p>
        <p>Montante: {Intl.NumberFormat("pt-BR").format(totalAtualizado)}</p>
        <p>Juros: R${valorjuros}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Exercício 3</h1>
      <div className="conteudo">
        <form onSubmit={(e) => e.preventDefault()}>
          <p>Digite o valor do capital</p>
          <input
            type="number"
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
          />

          <p>Digite a taxa (%)</p>
          <input
            type="number"
            value={taxa}
            onChange={(e) => setTaxa(e.target.value)}
          />

          <p>Digite o tempo em meses</p>
          <input
            type="number"
            value={tempo}
            onChange={(e) => setTempo(e.target.value)}
          />

          <br />
          <br />
          <input type="button" value="Calcular" onClick={calcular} />
        </form>

        <br />
        {result}

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  );
}
