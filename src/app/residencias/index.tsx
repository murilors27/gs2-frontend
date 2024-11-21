import "./residencias.css"; // Certifique-se de que o arquivo CSS exista e esteja correto
import Container from "@/components/container";
import ResidenciaCard from "@/components/residencia/ResidenciaCard"; // Caminho absoluto para o componente

const Residencias = () => {
  // Dados simulados de residências
  const mockData = [
    {
      id: 1,
      nomeResponsavel: "João Silva",
      endereco: "Rua das Flores, 123",
      capacidadeGeracao: 1000,
      tipoFonte: "Solar",
      status: "Produzindo",
    },
    {
      id: 2,
      nomeResponsavel: "Maria Oliveira",
      endereco: "Av. Central, 456",
      capacidadeGeracao: 500,
      tipoFonte: "Eólica",
      status: "Consuming",
    },
  ];

  return (
    <Container img="img03.jpg"> {/* Adicione uma imagem de fundo apropriada */}
      <section className="main">
        <h1 className="section_title">Residências Cadastradas</h1>
        <div className="residencias-list">
          {mockData.map((residencia) => (
            <ResidenciaCard key={residencia.id} residencia={residencia} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Residencias;
