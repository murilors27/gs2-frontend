import React from "react";

interface ResidenciaProps {
  idResidencia: number;
  nomeResponsavel: string;
  endereco: string;
  capacidadeGeracao: number;
  tipoFonte: string;
  limiteConsumo: number;
}

const ResidenciaCard: React.FC<ResidenciaProps> = ({
  idResidencia,
  nomeResponsavel,
  endereco,
  capacidadeGeracao,
  tipoFonte,
  limiteConsumo,
}) => {
  console.log({
    idResidencia,
    nomeResponsavel,
    endereco,
    capacidadeGeracao,
    tipoFonte,
    limiteConsumo,
  });
  
  return (
    <div className="residencia-card">
      <h2>{nomeResponsavel}</h2>
      <p>ID da Residência: {idResidencia}</p>
      <p>Endereço: {endereco}</p>
      <p>Capacidade de Geração: {capacidadeGeracao} kWh</p>
      <p>Tipo de Fonte: {tipoFonte}</p>
      <p>Limite de Consumo: {limiteConsumo} kWh</p>
    </div>
  );
};

export default ResidenciaCard;
