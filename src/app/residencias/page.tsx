"use client";

import React, { useEffect, useState } from "react";
import { buscarResidencias } from "../../lib/api";
import ResidenciaCard from "../../components/residencia/ResidenciaCard";
import "./residencias.css";
import Container from "@/components/container";

const Residencias: React.FC = () => {
  const [residencias, setResidencias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchResidencias = async () => {
      try {
        const response = await buscarResidencias();
        console.log("API response:", response);

        if (isMounted) {
          if (response && response.data) {
            console.log("response.data:", response.data);

            if (Array.isArray(response.data) && response.data.length > 0) {
              console.log("response.data é um array com dados:", response.data);
              setResidencias(response.data);
            } else {
              setError("Dados de residências não encontrados.");
            }
          } else {
            setError("Resposta da API inválida.");
          }
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError("Erro ao buscar residências. Tente novamente mais tarde.");
          setLoading(false);
        }
        console.error("Erro ao buscar residências:", error);
      }
    };

    fetchResidencias();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container img="residencias-bg.jpg">
      <section className="residencias_section">
        <h1>Residências Cadastradas</h1>
        {loading ? (
          <p>Carregando residências...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="residencia-list">
            {residencias && residencias.length > 0 ? (
              residencias.map((residencia, index) => (
                <ResidenciaCard
                  key={residencia.idResidencia || index}
                  idResidencia={residencia.idResidencia}
                  nomeResponsavel={residencia.nomeResponsavel}
                  endereco={residencia.endereco}
                  capacidadeGeracao={residencia.capacidadeGeracao}
                  tipoFonte={residencia.tipoFonte}
                  limiteConsumo={residencia.limiteConsumo}
                />
              ))
            ) : (
              <p>Nenhuma residência encontrada.</p>
            )}
          </div>
        )}
      </section>
    </Container>
  );
};

export default Residencias;