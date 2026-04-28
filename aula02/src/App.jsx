import "./App.css";
import Exemplo1 from "./Exemplo1"

export default function App() {
  return (

    <div>
      <h1> Aula 02 - Criação de Componentes e Props </h1>
    
    <div className="card">
      <h3>Chamadas para o componente Exemplo1</h3>

      <Exemplo1 num1={15} num2={20} />
    </div>
    </div>
  )
}