import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="title">
          <h1>Mergulhe em um <span>Oceano <br />Sustentável</span></h1>
        </div>
      </section>

      <section className="section-text-img">
        <div className="section-text right">
          <h2>A Importância dos Oceanos</h2>
          <p>Os oceanos são a força vital do nosso planeta, cobrindo mais de 70% da superfície terrestre e sustentando uma incrível diversidade de vida. Eles regulam o clima, produzem mais de metade do oxigênio que respiramos e são uma fonte crucial de alimento e recursos econômicos.</p>
          <ul>
            <li><span>Biodiversidade Marinha:</span> Os oceanos abrigam uma vasta gama de espécies, desde minúsculos plânctons até gigantescas baleias. Cada organismo desempenha um papel vital na manutenção da saúde do ecossistema marinho.</li>
            <li><span>Regulação Climática:</span> Os oceanos absorvem grande parte do dióxido de carbono e calor, ajudando a moderar o clima global e a combater as mudanças climáticas.</li>
            <li><span>Recursos Vitais:</span> Pesca, turismo e transporte marítimo são apenas alguns dos setores que dependem diretamente dos oceanos, impactando bilhões de vidas em todo o mundo.</li>
          </ul>
        </div>
        <div className="section-image">
          <Image className="img-small" src="/img7.jpg" alt="imagem do mar" width={400} height={500}></Image>
        </div>
      </section>

      <section className="section-text-img different">
        <div className="section-image">
          <Image className="img-small" src="/img8.jpg" alt="imagem do mar" width={400} height={500}></Image>
        </div>
        <div className="section-text left">
          <h2>Ameaças aos Nossos Oceanos</h2>
          <p>Infelizmente, nossos oceanos estão sob grave ameaça devido a uma série de problemas ambientais. É vital que todos nós entendamos esses desafios para podermos agir e fazer a diferença.</p>
          <ul>
            <li><span>Poluição Plástica:</span> Todos os anos, milhões de toneladas de plástico entram nos oceanos, causando danos devastadores à vida marinha e aos ecossistemas.</li>
            <li><span>Mudanças Climáticas:</span> O aquecimento global está causando a acidificação dos oceanos, o aumento do nível do mar e a perda de habitats essenciais como os recifes de coral.</li>
            <li><span>Sobrepesca:</span> A pesca excessiva está esgotando as populações de peixes, colocando em risco a sustentabilidade dos recursos marinhos e a subsistência de comunidades que dependem da pesca.</li>
          </ul>
        </div>
      </section>

      <section className="section-text-img">
        <div className="section-text right">
          <h2>Juntos Podemos Fazer a Diferença</h2>
          <p>Cada um de nós pode contribuir para a proteção e preservação dos oceanos. Através de pequenas mudanças no nosso dia a dia e da participação em iniciativas globais, podemos criar um impacto positivo.</p>
          <ul>
            <li><span>Reduza, Reutilize, Recicle:</span> Diminua o uso de plásticos descartáveis e adote práticas de reciclagem para reduzir a poluição.</li>
            <li><span>Apoie a Economia Azul:</span> Incentive práticas sustentáveis que protejam os ecossistemas marinhos e promovam o desenvolvimento econômico.</li>
            <li><span>Educação e Conscientização:</span> Participe de campanhas de conscientização, compartilhe informações e eduque-se sobre os problemas enfrentados pelos oceanos.</li>
            <li><span>Participe de Ações Locais:</span> Junte-se a iniciativas de limpeza de praias, programas de proteção de vida marinha e outros projetos que visam a preservação dos oceanos.</li>
          </ul>
        </div>
        <div className="section-image">
          <Image className="img-small" src="/img3.jpg" alt="imagem do mar" width={400} height={500}></Image>
        </div>
      </section>

    </main>
  );
}
