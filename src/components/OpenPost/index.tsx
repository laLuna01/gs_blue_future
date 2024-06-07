import React, { useCallback, useEffect } from "react";
import { Props } from "./interface";

const OpenPost = (props: Props) => {

  const pegarEndereco = useCallback(async () => {
    try {
        const response = await fetch("http://localhost:8080/endereco" + props.idEndereco);
        const result = await response.json();
        console.log(result)
    } catch (error) {
        console.error("Erro ao pegar dados:", error);
    }
  }, [props.idEndereco]);

  useEffect(() => {
    pegarEndereco();
  }, [pegarEndereco]);

  return (
    <div className={`open-post ${props.denuncia ? "open-denuncia" : ""}`}>
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
        <img src={props.image} alt="img" />
        <div className="autor-data">
            <p>{`${props.denuncia ? "Denunciado por: " : "Publicado por: "}` + props.autor}</p>
            {props.denuncia && <div>
                <p>{"Em tanana" + props.idEndereco}</p>
              </div>
            }
            <p>{props.data}</p>
        </div>
        <div className="sair">
            <button><a href="./posts">Voltar</a></button>
        </div>
    </div>
  )
};

export default OpenPost;
