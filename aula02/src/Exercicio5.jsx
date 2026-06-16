export default function Exercicio5({ consultas }) {
  const qtdConsultas = Number(consultas);
  const salB = qtdConsultas * 150.0;
  const inss = salB * 0.08;
  const salL = salB - inss;

  return (
    <div>
      <br />
      Para {qtdConsultas} consultas:
      <br />
      Salário Bruto: R$ {salB.toFixed(2)}, INSS: R$ {inss.toFixed(2)}, Salário
      Líquido: R$ {salL.toFixed(2)}
    </div>
  );
}
