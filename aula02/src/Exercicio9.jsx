export default function Exercicio9({ valVendas, sal }) {
    const vendas = Number(valVendas);
    const salario = Number(sal);
    
    const comissao = vendas * 0.06;
    const salarioF = salario + comissao;
  
    return (
      <div>
        <br />
        O valor da comissão é: {comissao}
        <br />
        Salário Final: {salarioF}
        <br />
      </div>
    );
  }
  