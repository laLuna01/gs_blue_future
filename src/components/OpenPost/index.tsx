import React from "react";
import { Props } from "./interface";

const OpenPost = (props: Props) => {
  return (
    <div className="open-post">
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
        <img src={props.image} alt="img" />
        <div className="autor-data">
            <p>{"Publicado por: " + props.autor}</p>
            <p>{props.data}</p>
        </div>
        <div className="sair">
            <button><a href="./posts">Voltar</a></button>
        </div>
    </div>
  )
};

export default OpenPost;
