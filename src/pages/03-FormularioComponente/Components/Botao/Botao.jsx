import { React } from "react";
export function Botao({ texto, tipo }) {
  return (
    <>
      <button type={tipo}>{texto}</button>
    </>
  );
}
