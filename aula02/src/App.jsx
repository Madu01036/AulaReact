import "./App.css";
import Exemplo1 from "./Exemplo1";
import Exercicio1 from "./Exercicio1";
import Exercicio2 from "./Exercicio2";
import Exercicio3 from "./Exercicio3";
import Exercicio4 from "./Exercicio4";
import Exercicio5 from "./Exercicio5";
import Exercicio6 from "./Exercicio6";
import Exercicio7 from "./Exercicio7";
import Exercicio9 from "./Exercicio9";
import Exercicio10 from "./Exercicio10";

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
        <Exercicio2 peso={90} altura={1.8} />
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

      <div className="card">
        <h3>Exercício 05</h3>
        <Exercicio5 consultas={35} />
        <Exercicio5 consultas={50} />
      </div>

      <div className="card">
        <h3>Exercício 06</h3>
        <Exercicio6 capi={1000} taxa={5} meses={5} />
        <Exercicio6 capi={2000} taxa={10} meses={10} />
      </div>

      <div className="card">
        <h3>Exercício 07</h3>
        <Exercicio7 cel={30} />
      </div>
      <div className="card">
        <h3>Exercício 09 </h3>
        <Exercicio9 valVendas = {700} sal = {1500}/>
        <Exercicio9 valVendas = {900} sal = {1600}/>
      </div>
      <div className="card">
        <h3>Exercício 10</h3>
        <Exercicio10 salB = {1700}/>
      </div>
    </div>
  );
}
