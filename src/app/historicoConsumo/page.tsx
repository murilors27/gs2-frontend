"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { buscarHistoricoPorResidencia } from "../../lib/api";
import "./historico.css";
import Container from "@/components/container";

const HistoricoResidencia: React.FC = () => {
  const [idResidencia, setIdResidencia] = useState<number | null>(null);
  const [historico, setHistorico] = useState<any[]>([]); // inicializa como array vazio
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdResidencia(Number(e.target.value));
  };

  const handleSearch = async () => {
    if (!idResidencia) {
      alert("Por favor, insira o ID da residência.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await buscarHistoricoPorResidencia(idResidencia);
      // A resposta parece ser um array, então acessamos o primeiro item
      setHistorico(response.length > 0 ? [response[0]] : []);
    } catch (err) {
      console.error("Erro ao buscar histórico:", err);
      setError("Erro ao buscar histórico. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container img="historico-bg.jpg">
      <section className="historico_section">
        <h1>Histórico de Consumo</h1>
        <div className="search-box">
          <input
            type="number"
            placeholder="ID da Residência"
            value={idResidencia || ""}
            onChange={handleChange}
          />
          <button onClick={handleSearch}>Buscar Histórico</button>
        </div>
        {loading ? (
          <p>Carregando histórico...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="historico-list">
            {historico.length > 0 ? (
              historico.map((entry, index) => (
                <div className="historico-card" key={entry.idHistorico || index}>
                  <h2>Data: {new Date(entry.dataRegistro).toLocaleDateString()}</h2>
                  <p>Produção: {entry.producao} kWh</p>
                  <p>Consumo: {entry.consumo} kWh</p>
                  <p>Saldo Energético: {entry.saldoEnergetico} kWh</p>
                </div>
              ))
            ) : (
              <p>Nenhum histórico encontrado para este ID.</p>
            )}
          </div>
        )}
      </section>
    </Container>
  );
};

export default HistoricoResidencia;