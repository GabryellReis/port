import React from "react";

export default function Profile() {
  return (
    <div className="container-fluid bg-dark rounded p-3 mb-5" id="profile">
      <h2 className="text-bg-dark p-3 row d-flex justify-content-center">
        Hello, World!!
      </h2>
      <div className="container-s">
        <details className="text-bg-dark">
          <summary>Expanda...</summary>
          <p className="text-bg-dark row d-flex justify-content-center p-3 lead">
            Este é um espaço para mostrar um pouco sobre das minhas habilidades
            em programação e também falar um pouco sobre mim. Fique à vontade
            para entrar em contato!
          </p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/gabryell-reis-desenvolvedor/"
            className="text-bg-dark"
          >
            Linkedin
          </a>
        </details>
      </div>
      <br />
      <div class="card mb-3 p-2">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://github.com/gabryellreis.png"
              class="img-fluid rounded-start"
              alt="Selfie de Gabryell Reis sorrindo e usando um headset"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Sobre mim</h5>
              <p class="card-text text-wrap">
                Olá! Sou um entusiasta de tecnologia apaixonado por criar
                soluções inovadoras que impulsionam o futuro. Meu objetivo é
                transformar ideias em realidade, criando produtos e serviços que
                tornem a vida das pessoas mais fácil, eficiente e gratificante.
                Sou habilidoso em linguagens de programação como JavaScript e
                Python, e também tenho conhecimento em frameworks e ferramentas
                populares, como React e Node.js. <br />
                Minhas principais habilidades incluem:
                <ul>
                  <li>
                    Desenvolvimento de software personalizado para atender às
                    necessidades dos clientes e às demandas do mercado.{" "}
                  </li>
                  <li>
                    Colaboração em equipe para promover a inovação e alcançar
                    resultados excepcionais.
                  </li>
                  <li>
                    Análise de dados para obter insights significativos e
                    orientar decisões informadas.
                  </li>
                </ul>
                Se você está em busca de um profissional de tecnologia dedicado,
                que ama desafios e busca constantemente por oportunidades de
                aprendizado, estou pronto para fazer parte do seu time. Vamos
                juntos conduzir a inovação com soluções de tecnologia de ponta!
                Entre em contato comigo para discutir como posso ajudar a
                impulsionar o seu projeto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
