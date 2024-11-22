// container.tsx
import Link from "next/link";
import "./container.css"; // Certifique-se de ajustar os estilos, se necessário.

interface ContainerProps {
  img?: string;  // Tornando img opcional
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, img }) => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <Link className="navbar-title" href="/">GARROVISION</Link>
          <div className="navbar-right">
            <Link className="navbar-options" href="/criadores">CRIADORES</Link>
            <Link className="navbar-options" href="/residenciaCadastro">CADASTRAR RESIDÊNCIA</Link>
            <Link className="navbar-options" href="/historicoConsumo">VERIFICAR CONSUMO</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="content">{children}</main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Garrovision - Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
};

export default Container;
