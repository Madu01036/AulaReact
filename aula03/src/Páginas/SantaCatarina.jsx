import { Link } from "react-router-dom";

export default function SantaCatarina() {
  return (
    <div>
      <h1>Estado de Santa Catarina</h1>
      <div className="conteudo">
        <img src="/SC.png" />

        <p>
          Santa Catarina (SC) é um estado localizado na Região Sul do Brasil que
          se destaca pela indústria, pela agricultura, pelo turismo e pela
          pesca. Sua capital, Florianópolis, é conhecida por suas praias, ilhas
          e belezas naturais. O estado também possui regiões de serra, cidades
          com forte influência de imigrantes europeus e um litoral bastante
          procurado por turistas, contribuindo para o desenvolvimento econômico
          e turístico.
        </p>

        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </div>
    </div>
  );
}
