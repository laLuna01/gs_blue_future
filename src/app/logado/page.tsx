"use client"
import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";

const Logado = () => {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear().toString().slice(-2);
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const dataPublicacao = `${dia}/${mes}/${ano}`;
    console.log(dataPublicacao);
    
    const [mostrarAviso, setMostrarAviso] = useState(false);
    const [mensagem, setMensagem] = useState<string>("");
    
    let [carregando, setCarregando] = useState(true);

    let userID = useRef<string | null>(null);

    let nome = useRef<string | null>(null);
    let usuario = useRef<string | null>(null);
    let email = useRef<string | null>(null);

    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [urlImage, setUrlImage] = useState("")
    const [denuncia, setIsDenuncia] = useState("")
    const [idUsuario, setIdUsuario] = useState(0)
    const [idEndereco, setIdEndereco] = useState(1)

    const changeTitulo = (event: any)=> {
        setTitulo(event.target.value)
    }
    const changeDescricao = (event: any)=> {
        setDescricao(event.target.value)
    }
    const changeUrlImage = (event: any)=> {
        setUrlImage(event.target.value)
    }
    const changeDenuncia = (event: any)=> {
        setIsDenuncia(event.target.value)
    }

    const pegarInformacao = useCallback(async () => {
        if (userID.current != null) {
            try {
                const response = await fetch("http://localhost:8080/usuario/id/" + userID.current);
                const result = await response.json();
                console.log(result)

                nome.current = result.nome
                usuario.current = result.usuario
                email.current = result.email
                setIdUsuario(parseInt(userID.current))

                setCarregando(false)
            } catch (error) {
                console.error("Erro ao pegar dados:", error);
            }
        }
    }, []);

    const sair = () => {
        localStorage.setItem('shouldRedirect', 'false');
    }  

    useEffect(() => {
        userID.current = localStorage.getItem('userID')
        pegarInformacao();
    }, [pegarInformacao]);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const enviarDados = async (event: any) => {
        event.preventDefault();

        const dados = {
            titulo,
            descricao,
            urlImage,
            denuncia: Boolean(denuncia),
            idUsuario,
            idEndereco,
            dataPublicacao
        };
        console.log(JSON.stringify(dados))

        try {
            const response = await fetch("http://localhost:8080/publicacao", {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(dados)
            });

            if (response.statusText === "Created") {
                setMostrarAviso(true);
                setMensagem("Post enviando");
            } else {
                setMostrarAviso(true);
                setMensagem("Ocorreu um erro");
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            setMostrarAviso(true);
            setMensagem("Falha na conexão");
        }
    };

    const fechar = () => {
        setMostrarAviso(false);
    }

    if (carregando) {
        console.log(carregando + " bah")
        return <p className="loading">Carregando...</p>;

    } else {

    return <section className="logado">
            {mostrarAviso &&
                <div className="alert-container">
                    <div className="alert">
                        <span onClick={fechar} className="close-btn">
                        &times;
                        </span>
                        <p>{mensagem}</p>
                    </div>
                </div>
            }
            <div className="page">
                <h2 className="titulo">{"Olá " + nome.current + ", o que gostaria de compartilhar?"}</h2>
                <form className="write">
                    <input value={titulo} onChange={changeTitulo} type="text" placeholder="Título" required />
                    <textarea value={descricao} onChange={changeDescricao} placeholder="Descricão" required />
                    <input value={urlImage} onChange={changeUrlImage} type="text" placeholder="Link imagem" required />
                    <div className="checkbox">
                        <p>Isto é uma denúncia?</p>
                        <div>
                            <div className="checkbox-item">
                                <input value="true" onChange={changeDenuncia} type="radio" name="denuncia" id="denuncia" required />
                                <label htmlFor="denuncia">Sim</label>
                            </div>
                            <div className="checkbox-item">
                                <input value="false" onChange={changeDenuncia} type="radio" name="nao_denuncia" id="denuncia" required />
                                <label htmlFor="nao_denuncia">Não</label>
                            </div>
                        </div>
                    </div>
                    <button className="publish" type="submit" onClick={enviarDados}>Publicar</button>
                </form>
            </div>
            <div className="sair" onClick={sair}>
                <button>
                    <a href="./login">Sair</a>
                </button>
            </div>
        </section>;
    }
};

export default Logado;
