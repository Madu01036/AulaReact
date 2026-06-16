export default function ExibirSalario({ salB }) {
  const salario = parseFloat(salB);
  const grati = salario * 0.08;
  const salF = salario + grati;

  return (
    <div>
      <br />
      Salário Base: R$ {salario.toFixed(2)}
      <br />
      Gratificação (8%): R$ {grati.toFixed(2)}
      <br />
      Salário Final: R$ {salF.toFixed(2)}
    </div>
  );
}
