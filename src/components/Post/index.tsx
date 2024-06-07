import React from "react";
import { Props } from "./interface";

const Post = (props: Props) => {
  return (
    <div className={`post ${props.denuncia ? "denuncia" : ""}`}>
        <h3>{props.titulo}</h3>
        <div>
          <div>
            <p className="autor">{props.autor}</p>
            <p>{props.data}</p>
          </div>
          <div>
            <button>Abrir</button>
          </div>
        </div>
    </div>
  )
};

export default Post;
