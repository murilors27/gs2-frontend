import ResidenciaForm from '../../components/residencia/ResidenciaForm';

const CadastroResidencia = () => {
  const handleCadastro = (dados: any) => {
    // Aqui você pode integrar a API de cadastro
    console.log('Dados cadastrados:', dados);
  };

  return (
    <div className="container">
      <h1>Cadastro de Residência</h1>
      <ResidenciaForm onSubmit={handleCadastro} />
    </div>
  );
};

export default CadastroResidencia;
