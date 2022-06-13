import React from "react";

export default function ItemComponent(props) {
  const status = props.status;
  const name = props.name;

  return (
    <li>
      {name}
      <p>Item status: {status ? <span>Finalizado</span> : <span>Não Finalizado</span>}</p>
    </li>
  );
}
