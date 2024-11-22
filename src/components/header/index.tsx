"use client";

import "./header.css";
import Link from "next/link";

const Header = () => {

  return (
    <header className="nav_container">
      <Link className="nav_container_title" href="/">
        GARROVISION
      </Link>
      <nav className="nav_links">
        <Link className="nav_container_options" href="/criadores">
          CRIADORES
        </Link>
        <Link className="nav_container_options" href="/residenciaCadastro">
          CADASTRE SUA RESIDÊNCIA
        </Link>
        <Link className="nav_container_options" href="/cadastroHistorico">
          CADASTRAR HISTÓRICO
        </Link>
      </nav>
    </header>
  );
};

export default Header;
