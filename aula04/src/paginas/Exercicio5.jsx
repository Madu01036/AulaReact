import { Link } from "react-router-dom";
import { useState } from "react";
export default function Exercicio5() {
    const [lado, setLado] = useState('');
    const [result, setResult] = useState('');

    function Calcular() {
        let valorquadrado = lado ** 2

        setResult(
            <div>
                Valor do lado: {lado}
                <br />
                Quadrado: {valorquadrado}
            </div>
        );
    }

    return (
        <div>

            <h1>Exercício 5</h1>

            <div className="conteudo">

                <p>Digite o valor do lado do quadrado</p>

                <input  type="text" 
                        value={lado}
                        onChange={(e) => setLado(e.target.value)} 
                 />

                <br />
                <br />
                 <input type="button" value="Calcular" onClick={Calcular} />

                <br /> <br />
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