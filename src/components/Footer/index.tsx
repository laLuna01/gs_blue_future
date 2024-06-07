import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
        <Image src="/fiap.png" alt="fiap logo" width={100} height={30}></Image>
        <div className="student">
            <h5>Luana Sousa Matos</h5>
            <p>RM552621</p>
            <p>1TDSPC</p>
        </div>
        <div className="student">
            <h5>Matheus de Freitas Silva</h5>
            <p>RM552602</p>
            <p>1TDSPC</p>
        </div>
        <div className="student">
            <h5>Rodrigo Mendes de Almeida Silva</h5>
            <p>RM553448</p>
            <p>1TDSPC</p>
        </div>
    </footer>
  )
};

export default Footer;
