"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { cadastrarResidencia } from "../../lib/api";
import "./cadastro.css";
import Container from "@/components/container";

const CadastroResidencia: React.FC = () => {
  const [form, setForm] = useState({
    nomeResponsavel: "",
    endereco: "",
    capacidadeGeracao: "",
    tipoFonte: "",
    limiteConsumo: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await cadastrarResidencia({
        ...form,
        capacidadeGeracao: Number(form.capacidadeGeracao),
        limiteConsumo: Number(form.limiteConsumo),
      });
      alert("Residência cadastrada com sucesso!");
      setForm({
        nomeResponsavel: "",
        endereco: "",
        capacidadeGeracao: "",
        tipoFonte: "",
        limiteConsumo: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar residência:", error);
      alert("Falha ao cadastrar residência.");
    }
  };

  return (
    <Container img="cadastro-bg.jpg">
      <section className="cadastro_section">
        <h1>Cadastrar Residência</h1>
        <p className="cadastro-description">Cadastre aqui sua residência para começar a monitorar a produção e o consumo de energia.
      Este cadastro é essencial para que você possa acompanhar de forma detalhada o desempenho
      energético de sua casa, incluindo geração de energia renovável e limites de consumo.</p>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nomeResponsavel"
            placeholder="Nome do Responsável"
            value={form.nomeResponsavel}
            onChange={handleChange}
          />
          <input
            type="text"
            name="endereco"
            placeholder="Endereço"
            value={form.endereco}
            onChange={handleChange}
          />
          <input
            type="number"
            name="capacidadeGeracao"
            placeholder="Capacidade de Geração"
            value={form.capacidadeGeracao}
            onChange={handleChange}
          />
          <select
            name="tipoFonte"
            value={form.tipoFonte}
            onChange={handleChange}
          >
            <option value="">Selecione o Tipo de Fonte</option>
            <option value="solar">Solar</option>
            <option value="eolica">Eólica</option>
            <option value="hidrica">Hídrica</option>
          </select>
          <input
            type="number"
            name="limiteConsumo"
            placeholder="Limite de Consumo"
            value={form.limiteConsumo}
            onChange={handleChange}
          />
          <button type="submit">Cadastrar Residência</button>
        </form>
        <button className="view-residences-button" onClick={() => router.push("/residencias")}>
          Ver Residências Cadastradas
        </button>
      </section>
    </Container>
  );
};

export default CadastroResidencia;
