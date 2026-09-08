import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exemplo1() {
  e.preventDefault();

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState();

  const [dias, setDias] = useState("");
  const [resultado, setResultado] = useState();

  function calcular() {
    let res = idade * 365;

    setDias(res);
  }

  function processar() {
    let res = idade * 365;
    calcular();
    setResultado(
      <div>
        O aluno {nome} já viveu {res} dias!
      </div>
    );
  }

  return (
    <div>
      <h1>Exemplo 1</h1>

      <div className="conteudo">
        <form>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="idade">Idade</label>
          <input
            type="number"
            name="idade"
            id="idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            step={1}
          />

          <input type="button" value="Enviar" onClick={processar} />
        </form>

        <p>Nome do Aluno: {nome}</p>
        <p>Idade: {idade}</p>

        <p>Dias Vividos: {dias}</p>
        <p>{resultado}</p>
        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  );
}
