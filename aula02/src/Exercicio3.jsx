export default function Exercicio3({ nota1, nota2 }) {

    let n1 = Number(nota1);
    let n2 = Number(nota2);
    let media = (n1 + n2) / 2;

    return (
        <div>
            <br />
            A média desse aluno é de {media}
        </div>
    )

}