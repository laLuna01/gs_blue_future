import React from "react";
import Image from "next/image";

const Informacao = () => {
  return (
    <>
      <section className="info-hero">
        <h2>Dados e Estatísticas dos Oceanos</h2>
        <div>
          <h3>Estado Atual dos Oceanos</h3>
          <p>Os oceanos são fundamentais para a saúde do nosso planeta, mas enfrentam desafios sem precedentes. Abaixo estão algumas estatísticas e dados atualizados que destacam a importância dos oceanos e as ameaças que eles enfrentam.</p>
        </div>
      </section>

      <section className="section-text-img">
        <div className="data right">
          <div>
            <h3>Área e Volume dos Oceanos</h3>
            <h4>Área Total</h4>
            <p>Os oceanos cobrem cerca de 71% da superfície da Terra</p>
            <h4>Volume de Água</h4>
            <p>Estimam-se em 1,332 bilhão de quilômetros cúbicos de água</p>
          </div>
          <div>
            <h3>Biodiversidade Marinha</h3>
            <h4>Espécies Conhecidas</h4>
            <p>Existem aproximadamente 230.000 espécies marinhas identificadas, mas os cientistas acreditam que o número real pode ser de até 2 milhões</p>
            <h4>Recifes de Corais</h4>
            <p>Cerca de 25% da vida marinha depende dos recifes de corais para abrigo e alimentação</p>
          </div>
        </div>
        <div>
          <Image className="img-small" src="/drawing1.png" alt="drawing" width={400} height={400}></Image>
        </div>
      </section>
    
      <section className="section-text-img diff">
        <div>
          <Image className="img-small" src="/drawing2.png" alt="drawing" width={400} height={400}></Image>
        </div>
        <div className="data left">
          <div>
            <h3>Poluição Oceânica</h3>
            <h4>Plástico nos Oceanos</h4>
            <p>Estima-se que 8 milhões de toneladas de plástico entrem nos oceanos a cada ano</p>
            <h4>Zonas Mortas</h4>
            <p>Existem mais de 400 zonas mortas nos oceanos, áreas onde os níveis de oxigênio são tão baixos que a vida marinha não pode sobreviver</p>
          </div>
          <div>
            <h3>Mudanças Climáticas e Acidificação dos Oceanos</h3>
            <h4>Aquecimento Oceânico</h4>
            <p>Os oceanos absorveram mais de 90% do calor adicional gerado pelas emissões de gases de efeito estufa desde os anos 1970</p>
            <h4>Acidificação</h4>
            <p>Desde o início da Revolução Industrial, a acidez dos oceanos aumentou em cerca de 30%, afetando a vida marinha, especialmente os organismos calcários como corais e moluscos</p>
          </div>
        </div>
      </section>
      
      <section className="section-text-img">
        <div className="data right">
          <div>
            <h3>Sobrepesca e Sustentabilidade</h3>
            <h4>Espécies Sobrepescadas</h4>
            <p>Mais de 30% das populações de peixes do mundo estão sendo pescadas em níveis biologicamente insustentáveis</p>
            <h4>Consumo Global de Peixe</h4>
            <p>A média de consumo global de peixe por pessoa dobrou nos últimos 50 anos, passando de cerca de 9,9 kg por ano na década de 1960 para mais de 20 kg por ano atualmente</p>
          </div>
          <div>
            <h3>Conservação e Proteção</h3>
            <h4>Áreas Marinhas Protegidas (AMPs)</h4>
            <p>Apenas cerca de 7.65% dos oceanos estão atualmente designados como áreas marinhas protegidas</p>
            <h4>Meta de Conservação</h4>
            <p>A meta global é proteger pelo menos 30% dos oceanos até 2030, como parte do movimento 30x30</p>
          </div>
        </div>
        <div>
          <Image className="img-small" src="/drawing.png" alt="drawing" width={400} height={400}></Image>
        </div>
      </section>
    </>
  )
};

export default Informacao;
