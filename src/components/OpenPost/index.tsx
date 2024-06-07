import React, { useCallback, useEffect, useState } from "react";
import { Props } from "./interface";

const OpenPost = (props: Props) => {
  let [logradouro, setLogradouro] = useState("");
  let [bairro, setBairro] = useState("");
  let [cidade, setCidade] = useState("");

  const pegarEndereco = useCallback(async () => {
    try {
        const response = await fetch("http://localhost:8080/endereco/id/" + props.idEndereco);
        const result = await response.json();
        console.log(result)
        setLogradouro(result.logradouro)
        setBairro(result.bairro)
        setCidade(result.localidade)
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
                <p>{"Em " + logradouro + ", " + bairro + " - " + cidade}</p>
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
