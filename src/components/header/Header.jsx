import "./Header.css";

export default function Header() {
  return (
    <section className="container-header">
      <article className="header-logo">
        <h1>
          <span>Jonatas</span> Moreira
        </h1>
      </article>
      <article className="header-navbar">
        <nav>
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about">Sobre Mim</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </article>
    </section>
  );
}
