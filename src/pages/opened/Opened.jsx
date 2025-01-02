import { useParams } from "react-router-dom";
import ProjectsData from "../../data/api";
import "./Opened.css";

export default function Opened() {
  const { id } = useParams(); // Obtém o parâmetro id da URL
  const project = ProjectsData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <p className="visible">Projeto não encontrado.</p>;
  }

  return (
    <section className="container-opened">
      
      <h2 className="visible">{project.nome}</h2>
      <div className="layout-opened">
        <article className="opened-left">
          <img className="visible" src={project.img} alt={project.nome} />
          <p className="visible">{project.details}</p>
        </article>
        <article className="opened-right">

          <p className="visible">{project.details_one}</p>
          <p className="visible">{project.details_two}</p>
          <p className="visible">{project.details_tree}</p>
          <div className="btn-code visible">
            <a className="live" href={project.link.live} target="_blank" rel="noopener noreferrer">
              Ver Projeto ao Vivo
            </a>
            <a className="github" href={project.link.github} target="_blank" rel="noopener noreferrer">
              <span>Ver Código no GitHub</span>
            </a>
          </div>
        </article>
      </div>
      <a className="btn-opened visible" href="/#projects">Voltar</a>
    </section>
  );
}
