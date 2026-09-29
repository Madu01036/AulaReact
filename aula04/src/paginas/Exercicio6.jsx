
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Exercicio4() {
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');


    const [result, setResult] = useState('');

    function calcular() {
        let subtotal = quantidade * valor;
        let desconto = subtotal * 0.10;
        let valorfinal = subtotal - desconto;

        setResult(
            <div>

                Subtotal: {subtotal}
                <br />
                Desconto: {desconto}
                <br />
                Valor Final: {valorfinal}

            </div>
        )

    }

    return (

        <div>

            <h1>Exercício 6</h1>

            <div className="conteudo">

                <form>

                    <p>Digite a quantidade de um produto</p>

                    <input
                        type="text"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                    />

                    <p>Digite o valor do produto</p>
                    <input
                        type="text"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />
                    <br /><br />
                    <input type="button" value="Calcular" onClick={calcular} />



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