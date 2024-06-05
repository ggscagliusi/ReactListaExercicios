import React, { useState, useEffect } from "react";
import "./styles/Desafio.css";

export function Desafio() {
  //a lista das cores
  const cores = ["#FF5733", "#33FF57", "#3357FF", "#F0FF33"];
  //variável e set dessa variável usando um useState relacionado ao array de cores
  const [corAtual, setCorAtual] = useState(cores[0]);

  //useEffect que gera um efeito colateral, trocando a cor de fundo do componente
  useEffect(() => {
    document.body.style.backgroundColor = corAtual;
  }, [corAtual]);

  //uma arrow function que seleciona uma posição aleatória do array de cores.
  const trocarCor = () => {
    const novaCor = cores[Math.floor(Math.random() * cores.length)];
    setCorAtual(novaCor);
  };

  return (
    <>
      <div id="alvo">
        <h1>Cor atual - {corAtual}</h1>
        <button onClick={trocarCor}>Clique aqui!</button>
      </div>
    </>
  );
}
