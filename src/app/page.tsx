import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="title">
          <h1>Mergulhe em um <span>Oceano <br />Sustentável</span></h1>
        </div>
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </section>

      <section className="content">
        <h2>Assim como o sábio Pirarucu uma vez disse:</h2>
        <p>Glub glub glub glub glub glub glub glub glub glub, glub glub glub glub glub glub glub glub glub glub glub? Glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub. Glub glub glub glub glub glub glub glub glub glub glub glub glub glub, glub glub glub glub glub glub glub glub glub glub glub glub. Glub glub glub glub glub glub glub glub glub glub glub glub, glub glub glub glub glub glub glub glub glub glub glub. Glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub.
        <br /><br />
        Glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub? Glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub. Glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub. Glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub, glub glub glub glub glub glub glub glub glub glub glub glub. Glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub glub.
        <br /><br /></p>
        <Image src="/image.jpg" alt="swimmin" width={500} height={400}></Image>
      </section>
    </main>
  );
}
