import * as React from "react";
import { useRef } from "react";

export default function Input({ type, name, placeholder }) {
  const inputRef = useRef(null);
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="main__container-input"
      ref={inputRef}
    />
  );
}
