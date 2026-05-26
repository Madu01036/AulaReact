export default function Exemplo({ num1, num2 }) {

    let soma = Number(num1) + Number(num2);

    return (
        <div>
            <p>
                Número1: {num1} <br />
                Número2: {num2} <br />
                <br />
                A soma é: {soma}
            </p>
        </div>
    );
}