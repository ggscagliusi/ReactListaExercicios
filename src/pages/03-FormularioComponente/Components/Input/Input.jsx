import { React } from "react";
import "./styles/Input.css";
export function Input({ value, onChange, name }) {
  return (
    <>
      <label className="label" htmlFor={name}>
        {name}
      </label>
      <input
        className="input"
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </>
  );
}
