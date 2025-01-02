import "./Home.css";
import Curriculo from '../../assets/pdf/jonatas-elieser-moreira-front-end.pdf';
import imgAutor from "../../assets/img/autor.png";

export default function Home() {
  const dataSkill = [
    { nome: "JavaScript" },
    { nome: "TypeScript" },
    { nome: "React.js" },
    { nome: "Next.js" },
    { nome: "SASS" },
    { nome: "Node.js" },
    { nome: "Express" },
    { nome: "MongoDB" },
    { nome: "Bootstrap" },
  ];

  const getDataSkill = () => {
    return dataSkill.map((valor, index) => <li key={index}>{valor.nome}</li>);
  };

  return (
    <section className="container-home" id="home">
      <article className="home-left">
        <h3 className="visible">Olá, meu nome é</h3>
        <h1 className="visible">Jonatas Moreira</h1>
        <p className="visible resume-home">
          Minha jornada me levou a dominar uma variedade de tecnologias
          modernas, permitindo-me transformar ideias em experiências digitais
          atraentes. Estou sempre em busca de novos desafios e oportunidades
          para aprimorar minhas habilidades e contribuir para projetos
          inovadores.
        </p>
        <p className="visible">Aqui estão algumas das tecnologias com as quais trabalhei:</p>
        <ul className="home-skills visible">{getDataSkill()}</ul>
        <div className="home-buttons">
          <a className="visible" href="#contact">Entre em contato</a>
          <a href={Curriculo} className="btn-curriculo visible">
            <span>Baixar meu Currículo</span>
          </a>
        </div>
      </article>
      <article className="home-right">
        <img  className="visible" src={imgAutor} alt="imagem do autor" />
      </article>
    </section>
  );
}
