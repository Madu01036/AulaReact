export default function Exercicio2({ peso, altura }) {
  let pes = Number(peso);
  let alt = Number(altura);
  let imc = pes / (alt * alt);

  return (
    <div>
      <br />O IMC dessa pessoa é de {imc}
    </div>
  );
}
