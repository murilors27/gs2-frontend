import Link from "next/link";
import "../styles/home.css";
import Container from "@/components/container";

export default function Home() {
  return (
    <Container img="img01.jpg">
      <section className="hero_section">
        <div className="hero_text">
          <h1 className="main_text">
            Garrovision: <br />
            Transformando o Futuro da Energia Renovável
          </h1>
          <p className="description">
            Uma plataforma inteligente para gerenciar e distribuir energia renovável, com foco em eficiência e sustentabilidade.
          </p>
          <Link href="#features" className="cta_button">
            Conheça as Funcionalidades
          </Link>

        </div>
      </section>

      <section id="features" className="features_section">
        <h2 className="section_title">Funcionalidades Inovadoras</h2>
        <div className="features_container">
          <div className="feature_card">
            <h3 className="feature_title">Monitoramento Inteligente</h3>
            <p className="feature_text">
              Monitore sua produção de energia em tempo real, com gráficos e dados precisos sobre a eficiência de suas fontes renováveis.
            </p>
          </div>
          <div className="feature_card">
            <h3 className="feature_title">Distribuição Eficiente</h3>
            <p className="feature_text">
              Distribua energia de forma equilibrada e inteligente, focando em áreas com maior necessidade.
            </p>
          </div>
          <div className="feature_card">
            <h3 className="feature_title">Sustentabilidade Garantida</h3>
            <p className="feature_text">
              Promova um futuro mais verde, com uso consciente de recursos naturais e foco na preservação ambiental.
            </p>
          </div>
        </div>
      </section>

      <section className="x">
        <section id="about" className="about_section">
          <h2 className="section_title">Sobre a Garrovision</h2>
          <p className="section_text">
            Garrovision é uma empresa dedicada à transformação da forma como a energia renovável é gerida e distribuída. Nosso objetivo é promover a sustentabilidade através de soluções tecnológicas de ponta, garantindo um impacto positivo no meio ambiente e na vida das pessoas.
          </p>
        </section>

        <section id="benefits" className="benefits_section">
          <h2 className="section_title">Benefícios para Você</h2>
          <ul className="benefits_list">
            <li className="benefit_item">Redução de custos com energia elétrica.</li>
            <li className="benefit_item">Maior controle e transparência no consumo.</li>
            <li className="benefit_item">Contribuição para um futuro mais sustentável.</li>
          </ul>
        </section>

        <section id="contact" className="contact_section">
          <h2 className="section_title">Fale Conosco</h2>
          <p className="section_text">
            Se você está interessado em saber mais sobre a Garrovision ou quer começar a usar nossa plataforma, entre em contato conosco!
          </p>
          <Link href="mailto:contato@garrovision.com" className="cta_button">
            Enviar Mensagem
          </Link>
        </section>
      </section>
    </Container>
  );
}
