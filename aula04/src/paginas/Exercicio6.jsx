import { useState } from "react";
import { Link } from "react-router-dom";

export default function Exercicio6() {
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularTotal(e) {
    e.preventDefault();

    let q = Number(quantidade);
    let p = Number(preco);

    let subtotal = q * p;
    let desconto = subtotal * 0.10; 
    let valorFinal = subtotal - desconto;

    setResultado(
      <div>
        <p>Subtotal = R$ {subtotal.toFixed(2)}</p>
        <p>Desconto (10%) = R$ {desconto.toFixed(2)}</p>
        <p>Valor final a pagar = R$ {valorFinal.toFixed(2)}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Exercício 6</h1>

      <div className="conteudo">
        <form onSubmit={calcularTotal}>
          <p>Digite a quantidade do produto</p>
          <p>
            <input 
              type="text" 
              value={quantidade} 
              onChange={(e) => setQuantidade(e.target.value)} 
            />
          </p>

          <p>Digite o preço do produto</p>
          <p>
            <input 
              type="text" 
              value={preco} 
              onChange={(e) => setPreco(e.target.value)} 
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
