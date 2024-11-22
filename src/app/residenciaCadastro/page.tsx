"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Usado para redirecionamento
import { cadastrarResidencia } from "../../lib/api";
import "./cadastro.css";

const CadastroResidencia: React.FC = () => {
  const [form, setForm] = useState({
    nomeResponsavel: "",
    endereco: "",
    capacidadeGeracao: "",
    tipoFonte: "",
    limiteConsumo: "",
  });

  const router = useRouter(); // Hook para navegação

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
    <div className="cadastro-container dark-theme">
      <h1>Cadastrar Residência</h1>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nomeResponsavel"
          placeholder="Nome do Responsável"
          value={form.nomeResponsavel}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={form.endereco}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="capacidadeGeracao"
          placeholder="Capacidade de Geração (kWh)"
          value={form.capacidadeGeracao}
          onChange={handleChange}
          title="Capacidade de Geração em kWh"
          required
        />
        <select
          name="tipoFonte"
          value={form.tipoFonte}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o Tipo de Fonte</option>
          <option value="Solar">Solar</option>
          <option value="Eólica">Eólica</option>
          <option value="Hidrelétrica">Hidrelétrica</option>
        </select>
        <input
          type="number"
          name="limiteConsumo"
          placeholder="Limite de Consumo (kWh)"
          value={form.limiteConsumo}
          onChange={handleChange}
          title="Limite de Consumo em kWh"
          required
        />
        <button type="submit">Cadastrar Residência</button>
      </form>
      {/* Botão para ver as residências cadastradas */}
      <button
        className="view-residences-button"
        onClick={() => router.push("/residencias")}
      >
        Ver Residências Cadastradas
      </button>
    </div>
  );
};

export default CadastroResidencia;
