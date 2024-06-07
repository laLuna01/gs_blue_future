"use client"
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
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
            <a className="login-icon" href="./login">
                <Image src="/user.svg" alt="Login" width={45} height={50}></Image>
            </a>
            <button className="menu-hamburger" onClick={toggleMenu}></button>
            {isMenuOpen && (
              <div className="menu-dropdown">
                <ul className="pages-dropdown">
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
                <a className="login-dropdown" href="./login">
                  <Image src="/user.svg" alt="Login" width={45} height={50}></Image>
                  <p>Login</p>
                </a>
              </div>
            )}
        </nav>
    </header>
  )
};

export default Header;
