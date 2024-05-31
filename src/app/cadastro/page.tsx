import React from "react";

const Cadastro = () => {
  return (
    <section className="signup">
        <form className="form" action="">
            <h2>Cadastro</h2>
            <input type="text" placeholder="Nome completo" required />
            <input type="text" placeholder="Nome de Usuário" required />
            <input type="email" placeholder="E-mail" required />
            <input type="password" placeholder="Senha" required />
            <button type="submit">Cadastrar</button>
            <p>Já tem uma conta? <a href="./login">Fazer login</a></p>
        </form>
    </section>
  )
};

export default Cadastro;
