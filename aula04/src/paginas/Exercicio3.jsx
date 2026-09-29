import { useState } from "react";
import {Link} from "react-router-dom";

export default function Exercicio3()
{
    const [result, setResult] = useState('');
    
    const [valor, setValor] = useState('');
    const [taxa, setTaxa] = useState('');
    const [tempo, setTempo] = useState('');
    
    function calcular() {
        
        let valorparcela;
        valorparcela = Number(valor) + Number(valor) * (Math.pow(Number(taxa) , 2) / 100) * Number(tempo); 

        setResult(
            <div>
                Valor: {valor}
                <br />
                Taxa:{taxa}
                <br />
                Meses:{tempo}
                <br />
                <br />
                Parcela atualizada: {Intl.NumberFormat('pt-BR').format(valorparcela)}
            </div>
        )
    }
    return (
        <div>

            <h1>Exercício 3</h1>

            <div className="conteudo">

            <form>

                <p>Digite o valor da prestação em atraso</p>
                <input type="text" 
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                />

                <p>Digite a taxa</p>
                <input type="text" 
                value={taxa}
                onChange={(e) => setTaxa(e.target.value)}
                />

                <p>Digite o tempo em meses</p>
                <input type="text" 
                value={tempo}
                onChange={(e) => setTempo(e.target.value)}
                />

                <input type="button" value="calcular" onClick={calcular}/>


            </form>
<br />
            {result}
                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}