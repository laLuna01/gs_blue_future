import React from "react";
import Image from "next/image";

const Ajudar = () => {
  return (
    <>
        <section className="section-text-img">
          <div className="section-image">
              <Image src="/img6.png" alt="ocean drawing" width={600} height={500}></Image>
          </div>
          <div className="section-text">
            <h2>Como ajudar?</h2>
            <p>Os oceanos são essenciais para a vida no nosso planeta, e todos nós podemos contribuir para sua preservação. Existem muitas maneiras de ajudar, seja através de ações simples no dia a dia, participando de iniciativas locais ou apoiando organizações dedicadas à conservação marinha. Aqui estão algumas ideias de como você pode fazer a diferença e ajudar os nossos oceanos:</p>
          </div>
        </section>
        <section className="section-text-img">
            <div>
              <ul>
                <li>Reduza o Uso de Plásticos</li>
                <ul>
                  <li><span>Evite Plásticos Descartáveis:</span> Substitua itens de plástico de uso único, como garrafas, canudos e sacolas, por alternativas reutilizáveis.</li>
                  <li><span>Recicle Corretamente:</span> Certifique-se de reciclar corretamente os plásticos e outros materiais recicláveis.</li>
                </ul>
                <li>Participe de Limpezas de Praia</li>
                <ul>
                  <li><span>Eventos Locais:</span> Junte-se a grupos comunitários e participe de eventos de limpeza de praias. Esses eventos ajudam a remover lixo e detritos que podem prejudicar a vida marinha.</li>
                  <li><span>Organize Sua Própria Limpeza:</span> Se não houver eventos em sua área, organize uma limpeza de praia com amigos e familiares.</li>
                </ul>
                <li>Apoie Políticas e Organizações de Conservação</li>
                <ul>
                  <li><span>Doe para Organizações de Conservação:</span> Apoie financeiramente organizações que trabalham para proteger os oceanos e a vida marinha.</li>
                  <li><span>Assine Petições:</span> Participe de campanhas e assine petições que visam a implementação de políticas de conservação marinha.</li>
                </ul>
                <li>Consuma Produtos do Mar de Forma Sustentável</li>
                <ul>
                  <li><span>Escolha Produtos Sustentáveis:</span> Compre peixes e frutos do mar de fontes sustentáveis, certificadas por organizações como o Marine Stewardship Council (MSC).</li>
                  <li><span>Informe-se:</span> Aprenda sobre as práticas de pesca sustentável e faça escolhas informadas ao consumir produtos do mar.</li>
                </ul>
                <li>Reduza a Pegada de Carbono</li>
                <ul>
                  <li><span>Opte por Transportes Sustentáveis:</span> Use bicicletas, transporte público ou caronas para reduzir as emissões de carbono.</li>
                  <li><span>Economize Energia:</span> Reduza o consumo de energia em casa, utilizando lâmpadas LED, eletrodomésticos eficientes e desligando dispositivos eletrônicos quando não estiverem em uso.</li>
                </ul>
                <li>Eduque e Conscientize</li>
                <ul>
                  <li><span>Compartilhe Informações:</span> Use suas redes sociais e outros meios para compartilhar informações sobre a importância dos oceanos e os desafios que eles enfrentam.</li>
                  <li><span>Eduque a Próxima Geração:</span> Ensine crianças e jovens sobre a importância da conservação marinha e como eles podem contribuir para a proteção dos oceanos.</li>
                </ul>
                <li>Voluntarie-se</li>
                <ul>
                  <li><span>Projetos e Programas Locais:</span> Procure oportunidades de voluntariado em organizações locais dedicadas à conservação dos oceanos.</li>
                  <li><span>Pesquisas Científicas:</span> Participe de programas de ciência cidadã que ajudam a coletar dados importantes para pesquisas sobre os oceanos.</li>
                </ul>
              </ul>
            </div>
        </section>
        <section className="section-text-img">
          <div>
            <h2>Para Onde Doar?</h2>
            <ul>
                <li>Instituto de Pesquisas Ecológicas (IPÊ)</li>
                <li>Projeto Tamar</li>
                <li>Instituto Baleia Jubarte</li>
                <li>SOS Mata Atlântica</li>
                <li>Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio).</li>
                <li>Projeto Coral Vivo.</li>
                <li>Instituto Boto Cinza</li>
                <li>Instituto Ecosurf</li>
                <li>Instituto Biota de Conservação</li>
                <li>Instituto Mar Adentro</li>
            </ul>
          </div>
          <div className="section-image">
              <Image src="/img5.png" alt="ocean drawing" width={600} height={500}></Image>
          </div>
        </section>
    </>
  )
};

export default Ajudar;
