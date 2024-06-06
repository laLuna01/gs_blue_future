"use client"
import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";

const Logado = () => {
    let [carregando, setCarregando] = useState(true);

    let userID = useRef<string | null>(null);

    let nome = useRef<string | null>(null);
    let usuario = useRef<string | null>(null);
    let email = useRef<string | null>(null);

    const pegarInformacao = useCallback(async () => {
        if (userID.current != null) {
            try {
                const response = await fetch("http://localhost:8080/usuario/id/" + userID.current);
                const result = await response.json();
                console.log(result)

                nome.current = result.nome
                usuario.current = result.usuario
                email.current = result.email

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

    if (carregando) {
        console.log(carregando + " bah")
        return <p className="loading">Carregando...</p>;
    } else {

    return <section className="logado">
            <h1 className="titulo">{"Olá " + nome.current}</h1>
            <div className="informacoes">
                <div className="card">
                    <h2 className="info">Informações do Usuário</h2>
                    <p className="dado"><span>Nome: </span>{nome.current}</p>
                    <p className="dado"><span>Sobrenome: </span>{usuario.current}</p>
                    <p className="dado"><span>Email: </span>{email.current}</p>
                </div>
            </div>
            <div onClick={sair}>
                <button>
                    <a href="./login">Sair</a>
                </button>
            </div>
        </section>;
    }
};

export default Logado;
