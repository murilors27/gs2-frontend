import React from 'react';

interface ResidenciaCardProps {
  residencia: {
    id: number;
    nomeResponsavel: string;
    endereco: string;
    capacidadeGeracao: number;
    tipoFonte: string;
    status: string;
  };
}

const ResidenciaCard: React.FC<ResidenciaCardProps> = ({ residencia }) => {
  return (
    <div className="residencia-card">
      <h2>{residencia.nomeResponsavel}</h2>
      <p>
        <strong>Endereço:</strong> {residencia.endereco}
      </p>
      <p>
        <strong>Capacidade:</strong> {residencia.capacidadeGeracao} kWh
      </p>
      <p>
        <strong>Fonte:</strong> {residencia.tipoFonte}
      </p>
      <p>
        <strong>Status:</strong> {residencia.status}
      </p>
      <div className="actions">
        <button>Editar</button>
        <button>Excluir</button>
        <button>Detalhes</button>
      </div>
    </div>
  );
};

export default ResidenciaCard;
