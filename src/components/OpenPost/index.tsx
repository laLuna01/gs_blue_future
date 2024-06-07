import React from "react";
import { Props } from "./interface";

const OpenPost = (props: Props) => {
  return (
    <div className="open-post">
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
        <p>{props.autor}</p>
        <p>{props.data}</p>
    </div>
  )
};

export default OpenPost;
