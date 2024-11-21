import "./GarroVision.css";
import Container from "@/components/container";

const Garrovision = () => {
  return (
    <Container img="img02.jpg">
      <section className="main">
        <h2 className="section_title">A Revolução da Energia Renovável</h2>
        <p className="section_text">
          O Garrovision oferece uma plataforma inteligente para a gestão de
          energia renovável. Através de fontes como solar e eólica, promovemos um
          impacto positivo no ambiente e na vida das pessoas, com monitoramento e
          distribuição eficientes.
        </p>

        <h3 className="sub_title">Como Funciona?</h3>
        <p className="section_text">
          A Garrovision monitora a produção de energia das fontes renováveis e
          redistribui a energia de forma justa, com foco nas residências com maior
          necessidade, oferecendo uma visão clara sobre consumo e produção.
        </p>

        <p className="section_text">
          Junte-se à nossa missão de tornar o mundo mais sustentável, com o uso
          inteligente da energia renovável.
        </p>
      </section>
    </Container>
  );
};

export default Garrovision;
