import "./App.css";
import Exemplo1 from "./Exemplo1"
import Exercicio1 from "./Exercicio1";
import Exercicio2 from "./Exercicio2"
import Exercicio3 from "./Exercicio3";
import Exercicio4 from "./Exercicio4";

export default function App() {
  return (
    <div>
      <h1> Aula 02 - Criação de Componentes e Props </h1>

      <div className="card">
        <h3>Chamadas para o componente Exemplo1</h3>

        <Exemplo1 num1={15} num2={20} />
      </div>

      <div className="card">
        <h3>Exercício 01</h3>

        <Exercicio1 numero={12} />
        <Exercicio1 numero={67} />
        <Exercicio1 numero={-5} />
      </div>

      <div className="card">
        <h3>Exercicio 02</h3>

        <Exercicio2 peso={70} altura={1.75} />
        <Exercicio2 peso={90} altura={1.80} />
      </div>

      <div className="card">
        <h3>Exercício 03</h3>

        <Exercicio3 nota1={8} nota2={10} />
        <Exercicio3 nota1={5} nota2={3} />
      </div>

      <div className="card">
        <h3>Exercício 04</h3>
        <Exercicio4 baset={5} alturat={10} />
        <Exercicio4 baset={8} alturat={4} />
      </div>
    
    </div>
  )
}