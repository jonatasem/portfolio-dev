import "./About.css";

export default function About() {
  return (
    <section className="container-about" id="about">
      <h2>Sobre Mim</h2>
      <div className="about-layout">
        <article className="about-left">
          <p>
              Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Tenho experiência em diversas tecnologias e sempre busco aprender novas habilidades.
              Sou Jonatas Elieser Moreira, um desenvolvedor front-end baseado em Adamantina, São Paulo, Brasil. Tenho uma sólida experiência em aplicações web responsivas, utilizando tecnologias como HTML, CSS, JavaScript, TypeScript, React.js, Next.js, WordPress e Git. Minha paixão é implementar novas funcionalidades, reestruturar websites e otimizar o desempenho, garantindo uma integração eficiente entre o frontend e o backend via API.
            </p>
            <p>
              Estou cursando Engenharia da Computação na Universidade Univesp, com previsão de conclusão em julho de 2028. Sou fluente em Português e tenho um nível intermediário de Inglês, além de conhecimentos básicos em Espanhol. Tenho experiência com metodologias ágeis, design responsivo, testes automatizados e integração de APIs, e sempre busco manter uma comunicação clara e colaborativa em equipe.
            </p>
        </article>
        <article className="about-right">
          <div>
            <h4>Vendedor</h4>
            <h5>Magazine Luiza</h5>
            <span>
              <p>Adamantina, São Paulo, Brasil</p>
              <p>Dez de 2023 - Atualmente</p>
            </span>
            <ul>
              <li>Responsável pelo atendimento presencial e remoto, garantindo uma experiência excepcional ao cliente.</li>
              <li>Realização de pós-venda e manutenção de uma carteira ativa de clientes, promovendo a fidelização.</li>
              <li>Participação ativa no conselho de colaboradores, integrando novos membros e facilitando cursos de capacitação.</li>
              <li>Desenvolvimento de estratégias eficazes de pós-venda, resultando em aumento significativo da retenção de clientes.</li>
              <li>Promoção de um ambiente de trabalho acolhedor e cooperativo, contribuindo para a integração da equipe.</li>
            </ul>
          </div>
          <div>
            <h4>Lavador de Veículos</h4>
            <h5>Toyota</h5>
            <span>
              <p>Adamantina, São Paulo, Brasil</p>
              <p>Out de 2022 - Mar de 2023</p>
            </span>
            <ul>
              <li>Realização de lavagem de veículos, garantindo a entrega de um serviço de alta qualidade.</li>
              <li>Identificação de danos e problemas nas superfícies dos veículos, reportando aos supervisores para manutenção apropriada.</li>
              <li>Manutenção da área de trabalho limpa e organizada, seguindo os padrões de segurança e higiene da empresa.</li>
              <li>Trabalho em equipe com outros funcionários para garantir eficiência e rapidez nos serviços prestados.</li>
            </ul>
          </div>
          <div>
            <h4>Agente 3 de Pedágio</h4>
            <h5>Concessionária Eixo SP</h5>
            <span>
              <p>Adamantina, São Paulo, Brasil</p>
              <p>Abr de 2021 - Out de 2021</p>
            </span>
            <ul>
              <li>Responsável pela cobrança de tarifas de pedágio, garantindo um atendimento rápido e eficiente aos motoristas.</li>
              <li>Verificação de documentos e conformidade de veículos para garantir a segurança nas estradas.</li>
              <li>Registro de transações de pagamento e manutenção de relatórios diários de arrecadação.</li>
              <li>Atendimento ao cliente, solucionando dúvidas e fornecendo informações sobre rotas e serviços.</li>
              <li>Colaboração com a equipe para melhorar processos e reduzir filas, proporcionando uma experiência positiva para os usuários.</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
