import { useEffect, useState } from "react";

export function RelogioDigital() {
  //capta a hora do sistema
  let hora = new Date().toLocaleTimeString();

  //set do Use State da hora
  const [hAtual, setHora] = useState(hora);

  //função para atualizar a hora
  function atualizarHora() {
    let horaNova = new Date().toLocaleTimeString();
    setHora(horaNova);
  }
  setInterval(atualizarHora);
  return (
    <>
      <h2>Hora Certa</h2>
      <h3>{hAtual}</h3>
    </>
  );
}
