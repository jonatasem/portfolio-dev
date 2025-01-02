import "./About.css";

export default function About() {
  return (
    <section className="container-about visible" id="about">
      <h2 className="visible">Sobre Mim</h2>
      <div className="about-layout">
        <article className="about-left">
          <p className="visible">
            Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Tenho experiência em diversas tecnologias e sempre busco aprender novas habilidades.
            Sou Jonatas Elieser Moreira, um desenvolvedor front-end baseado em Adamantina, São Paulo, Brasil. Tenho uma sólida experiência em aplicações web responsivas, utilizando tecnologias como HTML, CSS, JavaScript, TypeScript, React.js, Next.js, WordPress e Git. Minha paixão é implementar novas funcionalidades, reestruturar websites e otimizar o desempenho, garantindo uma integração eficiente entre o frontend e o backend via API.
          </p>
          <p className="visible">
            Estou cursando Engenharia da Computação na Universidade Univesp, com previsão de conclusão em julho de 2028. Sou fluente em Português e tenho um nível intermediário de Inglês, além de conhecimentos básicos em Espanhol. Tenho experiência com metodologias ágeis, design responsivo, testes automatizados e integração de APIs, e sempre busco manter uma comunicação clara e colaborativa em equipe.
          </p>
        </article>
        <article className="about-right">
          <div className="visible">
            <h4 className="visible">Vendedor</h4>
            <h5 className="visible">Magazine Luiza</h5>
            <span className="visible">
              <p>Adamantina, São Paulo, Brasil</p>
              <p>Dez de 2023 - Atualmente</p>
            </span>
            <ul>
              <li className="visible">Responsável pelo atendimento presencial e remoto, garantindo uma experiência excepcional ao cliente.</li>
              <li className="visible">Realização de pós-venda e manutenção de uma carteira ativa de clientes, promovendo a fidelização.</li>
              <li className="visible">Participação ativa no conselho de colaboradores, integrando novos membros e facilitando cursos de capacitação.</li>
              <li className="visible">Desenvolvimento de estratégias eficazes de pós-venda, resultando em aumento significativo da retenção de clientes.</li>
              <li className="visible">Promoção de um ambiente de trabalho acolhedor e cooperativo, contribuindo para a integração da equipe.</li>
            </ul>
          </div>
          <div className="visible">
            <h4 className="visible">Lavador de Veículos</h4>
            <h5 className="visible">Toyota</h5>
            <span className="visible">
              <p>Adamantina, São Paulo, Brasil</p>
              <p>Out de 2022 - Mar de 2023</p>
            </span>
            <ul>
              <li className="visible">Realização de lavagem de veículos, garantindo a entrega de um serviço de alta qualidade.</li>
              <li className="visible">Identificação de danos e problemas nas superfícies dos veículos, reportando aos supervisores para manutenção apropriada.</li>
              <li className="visible">Manutenção da área de trabalho limpa e organizada, seguindo os padrões de segurança e higiene da empresa.</li>
              <li className="visible">Trabalho em equipe com outros funcionários para garantir eficiência e rapidez nos serviços prestados.</li>
            </ul>
          </div>
          <div className="visible">
            <h4 className="visible">Agente 3 de Pedágio</h4>
            <h5 className="visible">Concessionária Eixo SP</h5>
            <span className="visible">
              <p>Adamantina, São Paulo, Brasil</p>
              <p>Abr de 2021 - Out de 2021</p>
            </span>
            <ul>
              <li className="visible">Responsável pela cobrança de tarifas de pedágio, garantindo um atendimento rápido e eficiente aos motoristas.</li>
              <li className="visible">Verificação de documentos e conformidade de veículos para garantir a segurança nas estradas.</li>
              <li className="visible">Registro de transações de pagamento e manutenção de relatórios diários de arrecadação.</li>
              <li className="visible">Atendimento ao cliente, solucionando dúvidas e fornecendo informações sobre rotas e serviços.</li>
              <li className="visible">Colaboração com a equipe para melhorar processos e reduzir filas, proporcionando uma experiência positiva para os usuários.</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}