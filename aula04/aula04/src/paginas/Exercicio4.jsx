
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Exercicio4() {
    const [base, setBase] = useState('');
    const [altura, setAltura] = useState('');

    const [result, setResult] = useState('');

    function calcular() {
        let valortriangulo = (base * altura) / 2;

        setResult(
            <div>

                Base: {base}
                <br />
                Altura: {altura}
                <br />
                Área do triangulo: {valortriangulo}

            </div>
        )

    }

    return (

        <div>

            <h1>Exercício 4</h1>

            <div className="conteudo">

                <form>

                    <p>Digite a base do triângulo</p>

                    <input
                        type="text"
                        value={base}
                        onChange={(e) => setBase(e.target.value)}
                    />

                    <p>Digite a altura do triângulo</p>

                    <input
                        type="text"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                    />

                    <br /><br />

                    <input type="button"
                        value="Calcular"
                        onClick={calcular}
                    />



                </form>
                <br />
                <div>
                    {result}
                </div>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}