import { useState } from "react";
import "./App.css";
import { ListaInterna } from "./pages/01-ListaInternaUseState/ListaInterna";
import { RelogioDigital } from "./pages/02-RelogioDigital/RelogioDigital";
import { Form } from "./pages/03-FormularioComponente/Form";
import { ListaBusca } from "./pages/04-ListaBusca/ListaBusca";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>
        {" "}
        1 - Consuma uma lista interna usando o useState. Crie um botão que
        permita adicionar itens a essa lista. O Item adicionado deve ser
        renderizado em tela.{" "}
      </h3>
      <br />
      <ListaInterna></ListaInterna>
      <br />
      <br />
      <br />
      <h3>
        2 - Criar um componente que retorna nosso horário local e atualiza
        automaticamente na tela - Como um relógio digital.
      </h3>
      <br />
      <RelogioDigital></RelogioDigital>
      <br />
      <br />
      <br />
      <h3>
        3 - Construa um componente que retorna um input, e um componente que
        retorna um botão. Em uma página separada, importe esses componentes,
        fazendo um formulário. Uma vez com o formulário preenchido, o clique do
        botão deve imprimir no console as entradas de dados.
      </h3>
      <br />
      <Form></Form>
      <br />
      <br />
      <br />
      <h3>
        Consuma uma lista de dados internos, e crie uma barra de busca. A barra
        de busca deve filtrar o valor digitado atualizando o componente contendo
        a lista em tela
      </h3>
      <ListaBusca></ListaBusca>
    </>
  );
}

export default App;
