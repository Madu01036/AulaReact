import { useState } from "react";
import { Link } from "react-router-dom";



export default function Exercicio2() {
    const [result, setResult] = useState('');
    const [fahrenheit, setFahrenheti] = useState('');
    
    function calcular() {
        let celcius
        celcius = ((Number(fahrenheit) - 32) * 5) / 9
    
        setResult(
            <div>
                {fahrenheit} ºF em ºC é {celcius.toFixed(2)}
            </div>
        )
    }
    return (
        <div>

            <h1>Exercício 2</h1>

            <div className="conteudo">

                <form>

                    <p>Digite a temperatura em Fahrenheit</p>
                    <input type="text"
                        value={fahrenheit}
                        onChange={(e) => setFahrenheti(e.target.value)}
                    />

                    <input type="button" value='calcular' onClick={calcular} />

                </form>


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