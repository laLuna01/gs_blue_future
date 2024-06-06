import React from "react";
import Image from "next/image";
import WeDoCard from "@/components/WeDoCard";

const Sobre = () => {
  return (
    <>
        <section className="about-us">
            <div className="about">
            <h2>Sobre Nós</h2>
            <p>Somos uma equipe dedicada a promover a sustentabilidade dos oceanos e a conscientizar as pessoas sobre a importância vital que eles têm para a vida na Terra. Nosso projeto nasceu da paixão por proteger o meio ambiente e garantir que as futuras gerações possam desfrutar de oceanos saudáveis e vibrantes.</p>
            <p>Nossa missão é inspirar e mobilizar indivíduos, comunidades e organizações a tomarem medidas concretas para preservar e proteger os oceanos. Através da inovação tecnológica e da educação, buscamos soluções sustentáveis para os desafios ambientais que ameaçam os ecossistemas marinhos.</p>
            <p>Estamos sempre em busca de pessoas apaixonadas que queiram fazer a diferença. Seja através do voluntariado, de doações ou da participação em nossas iniciativas, cada contribuição é valiosa. Juntos, podemos criar um futuro melhor para nossos oceanos e para o planeta.</p>
            </div>
            <div className="what-we-do">
              <h2>O que Valorizamos</h2>
              <div className="we-do-cards">
                <WeDoCard titulo="Educação e Conscientização" texto="Oferecemos informação e conscientização para o público sobre os problemas enfrentados pelos oceanos e como cada um pode contribuir para a solução"></WeDoCard>
                <WeDoCard titulo="Inovação Tecnológica" texto="Desenvolvemos e implementamos tecnologias inovadoras para monitorar a saúde dos oceanos e mitigar os impactos negativos causados pela atividade humana"></WeDoCard>
                <WeDoCard titulo="Engajamento Comunitário" texto="Trabalhamos com comunidades locais, escolas e organizações para promover práticas sustentáveis e a proteção dos ecossistemas marinhos"></WeDoCard>
                <WeDoCard titulo="Sustentabilidade" texto="Comprometemo-nos a promover práticas que assegurem a saúde e a viabilidade a longo prazo dos oceanos"></WeDoCard>
                <WeDoCard titulo="Inovação" texto="Acreditamos no poder da inovação para encontrar soluções eficazes para os desafios ambientais"></WeDoCard>
                <WeDoCard titulo="Educação" texto="Valorizamos a educação como uma ferramenta fundamental para inspirar mudanças e promover a conscientização"></WeDoCard>
                <WeDoCard titulo="Colaboração" texto="Reconhecemos que a proteção dos oceanos é uma responsabilidade compartilhada e buscamos colaborar com diversas partes interessadas para alcançar nossos objetivos"></WeDoCard>
              </div>
            </div>
        </section>
    </>
  )
};

export default Sobre;
