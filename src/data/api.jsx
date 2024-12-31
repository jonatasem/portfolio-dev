import imgGraphic from "../assets/img/projects/graphic.png";
import imgColognese from "../assets/img/projects/colognese.png";
import imgMovies from "../assets/img/projects/movies.png";
import imgCommerce from "../assets/img/projects/e-commerce.png";
import imgViagens from "../assets/img/projects/viagens.png";

const ProjectsData = [
  {
    id: 0,
    nome: "Colognese Brigaderia",
    img: imgColognese,
    description:
      "Desenvolvido para uma empresa de doces.",
    link: {
      live: "https://colognese-brigaderia.vercel.app/",
      github: "https://github.com/jonatasem/colognese-brigaderia",
    },
  },
  {
    id: 1,
    nome: "Filmes",
    img: imgMovies,
    description: "Desenvolvido com React Vite, utilizando SASS.",
    link: {
      live: "https://jonatasem.github.io/movies-lionsgate/",
      github: "https://github.com/jonatasem/movies-lionsgate",
    },
  },
  {
    id: 2,
    nome: "E-commerce",
    img: imgCommerce,
    description:
      "Desenvolvido com React Vite, utilizando redux para gerenciamento de estado e sass.",
    link: {
      live: "https://jonatasem.github.io/e-commerce/",
      github: "https://github.com/jonatasem/e-commerce",
    },
  },
  {
    id: 3,
    nome: "Viagens",
    img: imgViagens,
    description: "Desenvolvido com HTML, CSS e JavaScript.",
    link: {
      live: "https://jonatasem.github.io/viagens/",
      github: "https://github.com/jonatasem/viagens",
    },
  },
  {
    id: 4,
    nome: "Grafico de Avaliação",
    img: imgGraphic,
    description: "Desenvolvido com React.jsx e ApexCharts.js",
    link: {
      live: "https://jonatasem.github.io/graphic/",
      github: "https://github.com/jonatasem/graphic",
    },
  },
];

export default ProjectsData;
