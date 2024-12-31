import "./About.css";

export default function About() {
  return (
    <section className="container-about" id="about">
      <h2>Sobre Mim</h2>
      <div className="about-layout">
        <article className="about-left">
          <p>img</p>
          <div className="bio-about">
            <h3>Olá! Eu sou [Seu Nome]</h3>
            <p>
              Sou um desenvolvedor apaixonado por criar soluções inovadoras e
              eficientes. Tenho experiência em diversas tecnologias e sempre
              busco aprender novas habilidades.
            </p>
          </div>
        </article>
        <article className="about-right">
          <p>right</p>
        </article>
      </div>
    </section>
  );
}
