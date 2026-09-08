import { useState } from "react";
import { Link } from "react-router-dom";

export default function Exercicio2() {
  const [fahrenheit, setFahrenheit] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularCelsius(e) {
    e.preventDefault();

    let celsius;
    celsius = ((Number(fahrenheit) - 32) * 5) / 9;

    setResultado(<p>Temperatura Celsius = {celsius.toFixed(2)}</p>);
  }

  return (
    <div>
      <h1>Exercício 2</h1>
      <div className="conteudo">
        <form onSubmit={calcularCelsius}>
          <p>Digite a temperatura em Fahrenheit</p>
          <p>
            <input
              type="text"
              value={fahrenheit}
              onChange={(e) => setFahrenheit(e.target.value)}
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
