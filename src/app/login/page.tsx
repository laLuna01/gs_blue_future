import React from "react";

const Login = () => {
  return (
    <section className="login">
        <form className="form" action="">
            <h2>Login</h2>
            <input type="email" placeholder="E-mail" required />
            <input type="password" placeholder="Senha" required />
            <button type="submit">Cadastrar</button>
            <p>Ainda não é cadastrado? <a href="./cadastro">Criar conta</a></p>
        </form>
    </section>
  )
};

export default Login;
