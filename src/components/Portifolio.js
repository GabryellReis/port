import React from "react";
import heart from "../videos/heart.gif";
import shopping from "../videos/shopping.gif";
import chat from "../videos/chat.gif";
import list from "../videos/list.gif";

export default function Portifolio() {
  return (
    <div className="container-fluid bg-dark rounded p-3 mb-5" id="portifolio">
      <h3 className="text-bg-dark">
        Que tal ver um pouquinho dos meus trabalhos e habilidades?
      </h3>
      <div className="row d-flex align-items-center">
        <div className="col text-bg-dark">
          <div className="card-body">
            <img
              className="img-top w-25 rounded align-self-start mb-4"
              src={heart}
              alt=" "
            />
            <h4 className="card-title">Pixel Art</h4>
            <p className="card-text">
              Projeto baseado na manipulação do DOM com JavaScript e
              conhecimentos de HTMl e CSS.
            </p>
            <img
              className="mb-2"
              src="https://skills.thijs.gg/icons?i=html,js,css"
              alt=" "
            />
            <br />
          </div>
        </div>
        <div className="col text-bg-dark">
          <div className="card-body">
            <img
              className="img-top w-25 rounded align-self-start mb-4"
              src={shopping}
              alt=" "
            />
            <h4 className="card-title">Shopping Cart</h4>
            <p className="card-text">
              Projeto mais avançado em JavaScript, com manipulação de DOM,
              controle de estado e requisições em API's.
            </p>
            <img
              className="mb-2"
              src="https://skills.thijs.gg/icons?i=html,js,bootstrap"
              alt=" "
            />
            <br />
          </div>
        </div>
        <div className="col text-bg-dark">
          <div className="card-body">
            <img
              className="img-top w-25 rounded align-self-start mb-4"
              src={chat}
              alt=" "
            />
            <h4 className="card-title">Chat UOL</h4>
            <p className="card-text">
              Projeto com foco em Front-end, controle de estado através do
              React. Uso de componentes funcionais e React Hooks
            </p>
            <img
              className="mb-2"
              src="https://skills.thijs.gg/icons?i=js,react,"
              alt=" "
            />
            <br />
          </div>
        </div>
        <div className="col text-bg-dark">
          <div className="card-body">
            <img
              className="img-top w-25 rounded align-self-start mb-4"
              src={list}
              alt=" "
            />
            <h4 className="card-title">Gerenciador de Pedidos</h4>
            <p className="card-text">
              Projeto com foco em Back-end, banco de dados, CRUD e interface de
              usuário feita em React.
            </p>
            <img
              className="mb-2"
              src="https://skills.thijs.gg/icons?i=nodejs,mysql,express,sequelize"
              alt=" "
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
