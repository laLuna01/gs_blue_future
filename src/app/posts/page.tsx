"use client";
import OpenPost from "@/components/OpenPost";
import Post from "@/components/Post";
import React, { useCallback, useEffect, useState } from "react";

export default function Posts() {
  const [mostrarAviso, setMostrarAviso] = useState(false);
  const [mensagem, setMensagem] = useState<string>("");

  const [publicacoes, setPublicacoes] = useState<any[]>([]);
  const [aberta, setAberta] = useState(false)

  const [carregando, setCarregando] = useState(true);

  const [publicacaoAberta, setPublicacaoAberta] = useState<any>([]);
  
  const pegarAutor = async (idUsuario: any): Promise<string> => {
    const response1 = await fetch("http://localhost:8080/usuario/id/" + idUsuario);
    const result1 = await response1.json();
    const autor: string = result1.usuario;
    console.log(autor)
    return autor;
  };

  const pegarPublicacoes = useCallback(async () => {
    console.log("aaaa")
    try {
      const response = await fetch("http://localhost:8080/publicacao");
      const result = await response.json();
      result.forEach((item: any) => {
        item.autor = pegarAutor(item.idUsuario);
        console.log(item)
      });
      setPublicacoes(result);
    } catch (error) {
      console.error("Erro ao pegar dados:", error);
      setMensagem("Falha na conexão");
    }
    setCarregando(false);
  }, []);

  const fechar = () => {
    setMostrarAviso(false);
  };

  useEffect(() => {
    pegarPublicacoes();
  }, [pegarPublicacoes]);

  const verPublicacao = (index: any) => {
    setAberta(true)
    setPublicacaoAberta(publicacoes[index]);
  };

  if (carregando) {
    console.log(carregando + " bah");
    return <p className="loading">Carregando...</p>;
  } else if (aberta) {
    console.log(publicacaoAberta)
    return <div>
      <OpenPost titulo={publicacaoAberta.titulo} descricao={publicacaoAberta.descricao} autor={publicacaoAberta.autor} data={publicacaoAberta.dataPublicacao} denuncia={publicacaoAberta.denuncia}></OpenPost>
    </div>
  } else {
    return (
      <section className="posts-page">
        {mostrarAviso && (
          <div className="alert-container">
            <div className="alert">
              <span onClick={fechar} className="close-btn">
                &times;
              </span>
              <p>{mensagem}</p>
            </div>
          </div>
        )}
        <div className="posts">
          {publicacoes.map((publicacao, index) => {
            return (
              <div onClick={() => verPublicacao(index)} key={publicacao.id}>
                <Post titulo={publicacao.titulo} autor={publicacao.autor} data={publicacao.dataPublicacao} denuncia={publicacao.denuncia}></Post>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
