import React, { useState } from "react";
import { Input } from "./Components/Input/Input";
import { Botao } from "./Components/Botao/Botao";
export function Form() {
  const [inputValue, setInputValue] = useState({
    nome: "",
    email: "",
    hobby: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = () => {
    event.preventDefault();
    console.log("Valor do Input: ", inputValue);
  };

  return (
    <>
      <h2>Exemplo de Formulário</h2>
      <form onSubmit={handleSubmit}>
        <Input
          name="nome"
          value={inputValue.nome}
          onChange={handleInputChange}
        />{" "}
        <br />
        <Input
          name="email"
          value={inputValue.email}
          onChange={handleInputChange}
        />
        <br />
        <Input
          name="hobby"
          value={inputValue.hobby}
          onChange={handleInputChange}
        />
        <br />
        <Botao texto="Enviar" />
      </form>
    </>
  );
}
