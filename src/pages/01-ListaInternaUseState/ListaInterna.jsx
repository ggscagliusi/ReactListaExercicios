import { useState, useEffetct } from "react";

export function ListaInterna() {
  const timesF1 = [
    { id: 1, nome: "RedBul Racing" },
    { id: 2, nome: "Ferrari" },
    { id: 3, nome: "Mercedes" },
    { id: 4, nome: "McLaren" },
    { id: 5, nome: "Aston Martin" },
    { id: 6, nome: "Haas" },
    { id: 7, nome: "Sauber" },
    { id: 8, nome: "Williams" },
    { id: 9, nome: "Alpine" },
    { id: 10, nome: "Alpha Tauri" },
  ];

  const [listaTimes, setListaTimes] = useState(timesF1);
  const [novoTime, setNovoTime] = useState("");

  function adicionarTime() {
    if (novoTime.trim() !== "") {
      const EntradaNovoTime = {
        id: listaTimes.length + 1,
        nome: novoTime,
      };

      setListaTimes([...listaTimes, EntradaNovoTime]);
      setNovoTime("");
    }
  }

  return (
    <>
      <h4>Lista de Times</h4>
      <ul>
        {listaTimes.map((equipe) => (
          <li key={equipe.id}>
            {equipe.id} - {equipe.nome}
          </li>
        ))}
      </ul>

      <br />
      <br />
      <br />

      <input
        type="text"
        value={novoTime}
        onChange={(e) => setNovoTime(e.target.value)}
        placeholder="Adicionar nova Equipe"
      />
      <button onClick={adicionarTime}>Enviar</button>
    </>
  );
}
