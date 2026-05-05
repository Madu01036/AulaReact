export default function Exercicio1({ numero }) {
    let quadrado = Number(numero) * Number(numero);
    let cubo = quadrado * Number(numero);

    return (
        <div>

            O quadrado do número {numero} é {quadrado} e o cubo desse número é {cubo}

        </div>
    )
}