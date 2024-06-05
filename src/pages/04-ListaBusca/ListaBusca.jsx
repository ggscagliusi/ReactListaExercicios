import { useEffect, useState } from "react";
import { Input } from "./Components/Input/Input";

export function ListaBusca() {
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
    { id: 10, nome: "BMW Motorsport" },
    { id: 11, nome: "MotorMoira Racing" },
    { id: 12, nome: "ABT Cupre Motorsport" },
    { id: 13, nome: "Alpha Racing by Redbull" },
  ];

  const [termoBusca, setTermoBusca] = useState("");
  const [dadosFiltrados, setDadosFiltrados] = useState(timesF1);

  useEffect(() => {
    const dadosFiltrados = timesF1.filter((equipe) =>
      equipe.nome.toLowerCase().includes(termoBusca.toLowerCase())
    );
    setDadosFiltrados(dadosFiltrados);
  }, [termoBusca]);

  return (
    <>
      <div>
        <Input
          type="text"
          placeholder="Digite o termo que você quer buscar"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
        <ul>
          {dadosFiltrados.map((item) => (
            <li key={item.id}>
              {item.id} - {item.nome}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
