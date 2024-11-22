"use client";

import React, { useEffect, useState } from "react";
import { buscarResidencias } from "../../lib/api";
import ResidenciaCard from "../../components/residencia/ResidenciaCard";
import "./residencias.css";
import Container from "@/components/container";

const Residencias: React.FC = () => {
  const [residencias, setResidencias] = useState<any[]>([]);

  useEffect(() => {
    const fetchResidencias = async () => {
      try {
        const response = await buscarResidencias();
        setResidencias(response.data);
      } catch (error) {
        console.error("Erro ao buscar residências:", error);
      }
    };

    fetchResidencias();
  }, []);

  return (
    <Container img="residencias-bg.jpg"> {/* Adicione uma imagem específica */}
      <section className="residencias_section">
        <h1>Residências Cadastradas</h1>
        <div className="residencia-list">
          {residencias.map((residencia) => (
            <ResidenciaCard key={residencia.id} {...residencia} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Residencias;
