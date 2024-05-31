"use client"
import React from "react";
import { useState } from "react";

const Cadastro = () => {
  const [mostrarAviso, setMostrarAviso] = useState(false);
  const [mensagem, setMensagem] = useState<string>("");

  const [nome, setNome] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const changeNome = (event: any) => {
    setNome(event.target.value);
  };
  const changeUser = (event: any) => {
    setUser(event.target.value);
  };
  const changeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const changeSenha = (event: any) => {
    setSenha(event.target.value);
  };

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const enviarDados = async (event: any) => {

    const dados = {
      nome,
      user,
      email,
      senha,
    };
    console.log(JSON.stringify(dados))

    try {
      const response = await fetch("http://localhost:8080/cliente", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(dados),
      });

      if (response.statusText === "Created") {
        setMostrarAviso(true);
        setMensagem("Usuário cadastrado");
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
  };

  return (
    <section className="signup">
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
      <form className="form">
        <h2>Cadastro</h2>
        <input value={nome} onChange={changeNome} type="text" placeholder="Nome completo" required />
        <input value={user} onChange={changeUser} type="text" placeholder="Nome de Usuário" required />
        <input value={email} onChange={changeEmail} type="email" placeholder="E-mail" required />
        <input value={senha} onChange={changeSenha} type="password" placeholder="Senha" required />
        <button type="submit" onClick={enviarDados}>Cadastrar</button>
        <p>
          Já tem uma conta? <a href="./login">Fazer login</a>
        </p>
      </form>
    </section>
  );
};

export default Cadastro;
