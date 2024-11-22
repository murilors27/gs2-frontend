import React from "react";

interface ResidenciaProps {
  nomeResponsavel: string;
  endereco: string;
  capacidadeGeracao: number;
  tipoFonte: string;
  limiteConsumo: number;
}

const ResidenciaCard: React.FC<ResidenciaProps> = ({
  nomeResponsavel,
  endereco,
  capacidadeGeracao,
  tipoFonte,
  limiteConsumo,
}) => {
  return (
    <div className="residencia-card">
      <h3>{nomeResponsavel}</h3>
      <p>Endereço: {endereco}</p>
      <p>Capacidade de Geração: {capacidadeGeracao} kWh</p>
      <p>Tipo de Fonte: {tipoFonte}</p>
      <p>Limite de Consumo: {limiteConsumo} kWh</p>
    </div>
  );
};

export default ResidenciaCard;
