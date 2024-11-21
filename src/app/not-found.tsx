import Container from "@/components/container";
import "@/styles/notFound.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container img="carro-chuva.avif">
      <section className="not-found-container">
        <h2>404</h2>
        <h1>Ops! A página não foi encontrada.</h1>
        <Link href={"/"}>Voltar para home</Link>
      </section>
    </Container>
  );
};

export default NotFound;
