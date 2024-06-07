import React from "react";
import Image from "next/image";

const Ajudar = () => {
  return (
    <>
        <section className="section-text-img help-hero">
          <div className="section-text">
            <h2>Como ajudar?</h2>
            <p>Os oceanos são essenciais para a vida no nosso planeta, e todos nós podemos contribuir para sua preservação. Existem muitas maneiras de ajudar, seja através de ações simples no dia a dia, participando de iniciativas locais ou apoiando organizações dedicadas à conservação marinha. Aqui estão algumas ideias de como você pode fazer a diferença e ajudar os nossos oceanos:</p>
          </div>
            <div className="section-image">
              <Image className="img-small" src="/img.svg" alt="desenho de agua poluida" width={450} height={450}></Image>
            </div>
        </section>
        <section className="section-text-img help">
            <div>
              <ul className="how-to-help">
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
                <li>Consuma Produtos do Mar de Forma Sustentável</li>
                <ul>
                  <li><span>Escolha Produtos Sustentáveis:</span> Compre peixes e frutos do mar de fontes sustentáveis, certificadas por organizações como o Marine Stewardship Council (MSC).</li>
                  <li><span>Informe-se:</span> Aprenda sobre as práticas de pesca sustentável e faça escolhas informadas ao consumir produtos do mar.</li>
                </ul>
              </ul>
            </div>
            <div className="section-image">
              <Image className="img-small" src="/img10.jpg" alt="foto de voluntarios" width={400} height={500}></Image>
            </div>
        </section>
        <section className="section-text-img help different">
            <div className="section-image">
              <Image className="img-small" src="/img9.jpg" alt="foto de voluntarios" width={500} height={500}></Image>
            </div>
            <div>
              <ul className="how-to-help">
                <li>Reduza a Pegada de Carbono</li>
                <ul>
                  <li><span>Opte por Transportes Sustentáveis:</span> Use bicicletas, transporte público ou caronas para reduzir as emissões de carbono.</li>
                  <li><span>Economize Energia:</span> Reduza o consumo de energia, utilize lâmpadas e eletrodomésticos eficientes, e desligue o que não usa.</li>
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
        <section className="section-text-img help">
          <div className="help-big">
            <h2>Para Onde Doar?</h2>
            <ul className="donate">
                <li><a href="https://ipe.org.br/doe/" target="_blank">Instituto de Pesquisas Ecológicas (IPÊ) -&gt;</a></li>
                <li><a href="https://www.visa.com.br/pt_br/causes/animais/projeto_tamar" target="_blank">Projeto Tamar -&gt;</a></li>
                <li><a href="https://www.baleiajubarte.org.br/centrodedoacao" target="_blank">Instituto Baleia Jubarte -&gt;</a></li>
                <li><a href="https://ecosurf.org.br/#Doar" target="_blank">Instituto Ecosurf -&gt;</a></li>
                <li><a href="https://www.institutobiota.org.br/faca-parte/#doacao" target="_blank">Instituto Biota de Conservação -&gt;</a></li>
                <li><a href="https://www.ocean-alive.org/doar" target="_blank">Ocean Alive -&gt;</a></li>
            </ul>
          </div>
          <div className="section-image">
              <Image className="img-small" src="/img2.jpeg" alt="homem ajudando tartaruga" width={400} height={500}></Image>
          </div>
        </section>
    </>
  )
};

export default Ajudar;
