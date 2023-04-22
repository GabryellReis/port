import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top container-fluid">
      <div className="container-fluid">
        <h2 className="text-bg-dark p-2">Gabryell Reis | Dev Full Stack</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#profile"
                target="_self"
              >
                Perfil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portifolio">
                Portifólio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
