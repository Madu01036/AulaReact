export default function Exercicio1({ peso, altura }) {
    let pes = Number(peso)
    let alt = Number(peso);
    let imc = peso / (altura * altura);

    return (
        <div>
            O IMC dessa pessoa é de {imc}
        </div>
    )
}