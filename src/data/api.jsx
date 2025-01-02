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
    details: "A Confeitaria Elegante é mais do que apenas uma aplicação web, é uma verdadeira celebração da arte da confeitaria. Com o crescente interesse por doces artesanais, decidimos criar uma plataforma que não só apresenta uma variedade de delícias, mas também proporciona uma experiência envolvente para os amantes de doces.",
    details_one: "Imaginada para ser uma vitrine digital, a aplicação permite que os usuários explorem um cardápio repleto de opções irresistíveis, desde brigadeiros gourmet até tortas finas. Cada produto é cuidadosamente apresentado com imagens vibrantes e descrições detalhadas, despertando o apetite e a curiosidade de quem visita.",
    details_two: "A navegação na aplicação é intuitiva e fluida, permitindo que os usuários se desloquem facilmente entre a página inicial, onde são recebidos por um banner acolhedor, e as páginas de detalhes dos produtos. Ao clicar em um doce, os visitantes são transportados para uma nova tela que revela todos os segredos daquela iguaria, desde seus ingredientes selecionados até o carinho que envolve sua produção.",
    details_tree: "Com um design responsivo, a Confeitaria Elegante se adapta a diferentes dispositivos, garantindo que a experiência do usuário seja sempre agradável, seja em um computador, tablet ou smartphone. Além disso, a integração com redes sociais permite que os visitantes compartilhem suas descobertas e se conectem com a marca de forma simples e direta.",
    link: {
      live: "https://colognese-brigaderia.vercel.app/",
      github: "https://github.com/jonatasem/colognese-brigaderia",
    },
  },
  {
    id: 1,
    nome: "E-commerce",
    img: imgCommerce,
    description: "Desenvolvido com React Vite, utilizando redux para gerenciamento de estado e sass.",
    details: "Era uma vez um mundo onde as compras eram uma aventura emocionante. Neste reino, as pessoas podiam navegar por lojas virtuais recheadas de produtos incríveis, tudo ao alcance de um clique. As prateleiras eram infinitas, e cada item parecia brilhar com uma luz mágica, esperando para ser descoberto.",
    details_one: "As pessoas podiam adicionar itens a seus carrinhos com a facilidade de um toque, e, a cada nova adição, uma sinfonia de números surgia, mostrando quantos produtos estavam acumulando e o total da compra. Era como se cada compra fosse uma pequena celebração, uma recompensa pela busca incansável pelo que desejavam.",
    details_tree: "O design das lojas era tão atraente que fazer compras se tornava um passatempo divertido. As páginas se adaptavam a qualquer dispositivo, permitindo que os compradores se aventurassem em suas jornadas de compras, seja em um smartphone enquanto aguardavam na fila do café, ou em um computador enquanto relaxavam no sofá.",
    details_four: "E assim, nesse mundo encantado do e-commerce, as compras se tornaram não apenas uma necessidade, mas uma experiência cheia de alegria e descoberta, onde cada clique trazia a promessa de algo novo e excitante.",
    link: {
      live: "https://jonatasem.github.io/e-commerce/",
      github: "https://github.com/jonatasem/e-commerce",
    },
  },
  {
    id: 2,
    nome: "Grafico de Avaliação",
    img: imgGraphic,
    description: "Desenvolvido com React.jsx e ApexCharts.js",
    details: "O projeto Graphic é uma aplicação web que permite aos usuários explorar e filtrar avaliações de profissionais em diferentes unidades. Com uma interface intuitiva, a plataforma foi desenvolvida em React, oferecendo uma experiência de navegação fácil e eficiente. Os usuários podem aplicar filtros para encontrar avaliações específicas, como unidade, profissional e nota, tornando a busca mais personalizada.",
    details_one: "Além disso, a aplicação apresenta gráficos interativos que ilustram a distribuição das notas, permitindo uma visualização clara e concisa dos dados. Essa representação gráfica ajuda os usuários a identificar tendências e fazer comparações rapidamente. A funcionalidade de paginação garante que as avaliações sejam exibidas de maneira organizada, facilitando a navegação entre as páginas.",
    details_tree: "O design da aplicação é moderno e responsivo, adaptando-se a diferentes dispositivos e tamanhos de tela. Isso proporciona uma experiência agradável, independentemente de como os usuários escolhem acessar a plataforma. A interface amigável incentiva os usuários a interagir e explorar as avaliações de forma dinâmica.",
    details_four: "Utilizando tecnologias como React, React ApexCharts, Font Awesome e SASS, o Graphic combina funcionalidade e estética. Com essa abordagem tecnológica, a aplicação não só atende às necessidades de busca e visualização de avaliações, mas também oferece uma experiência interativa que torna a pesquisa de informações sobre profissionais mais prática e envolvente.",
    link: {
      live: "https://jonatasem.github.io/graphic/",
      github: "https://github.com/jonatasem/graphic",
    },
  },
];

export default ProjectsData;