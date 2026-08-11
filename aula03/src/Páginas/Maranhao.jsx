import { Link } from "react-router-dom";

export default function Maranhao() {
  return (
    <div>
      <h1>Estado do Maranhão</h1>
      <div className="conteudo">
        <img src="/MA.png" />

        <p>
          Maranhão (MA) é um estado localizado na Região Nordeste do Brasil que
          se destaca pela agricultura, pela pecuária, pelo comércio e pelo
          turismo. Sua capital, São Luís, possui um importante centro histórico
          reconhecido por sua arquitetura colonial e azulejos. O estado também é
          conhecido pelos Lençóis Maranhenses, com suas dunas e lagoas, além de
          possuir uma grande diversidade de paisagens naturais e manifestações
          culturais.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
