export default function Exercicio6({ capi, taxa, meses }) {

    let capital = Number(capi);
    let juros = Number(taxa);
    let tempo = Number(meses);

    let jurosS = capi * (1 + (taxa/100) * meses);
    let jurosC = capi * Math.pow (1 + (taxa / 100), meses);

    return (
        <div>
            <br />
            Capital = R$ {capi.toFixed(2)},
            Taxa = {taxa}%,
            Tempo = {meses} meses,
            <br />
            Montante (Juros Simples) = R$ {jurosS.toFixed(2)}
            <br />
            Montante (Juros Compostos) = R$ {jurosC.toFixed(2)}
            
        </div>
    );
}