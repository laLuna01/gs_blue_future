import React from "react";
import "./header.css"
import Image from "next/image";

const Header = () => {
  return (
    <header>
        <nav className="navbar">
            <a href="/">
                <Image src="/logo.svg" alt="Logo" width={45} height={55}></Image>
            </a>
            <ul className="pages">
              <li>
                <a className="page-link" href="./informacao">Informação</a>
              </li>
              <li>
                <a className="page-link" href="./ajudar">Ajudar</a>
              </li>
              <li>
                <a className="page-link" href="./posts">Posts</a>
              </li>
              <li>
                <a className="page-link" href="./sobre">Sobre</a>
              </li>
            </ul>
            <a href="./login">
                <Image src="/user.svg" alt="Login" width={45} height={50}></Image>
            </a>
        </nav>
    </header>
  )
};

export default Header;
