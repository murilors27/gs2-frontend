"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { cadastrarHistorico } from "../../lib/api";
import "./cadastro.css";
import Container from "@/components/container";

const CadastroHistorico: React.FC = () => {
  const [form, setForm] = useState({
    idResidencia: "",
    producao: "",
    consumo: "",
    saldoEnergetico: 0, // Adicionando o campo para o saldo energético
    dataRegistro: "", // Adicionando o campo para a data de registro
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Calcular o saldo energético
    const saldoEnergetico = Number(form.producao) - Number(form.consumo);

    // Definir a data do registro como a data atual
    const dataRegistro = new Date().toISOString().split("T")[0]; // Formato: "YYYY-MM-DD"

    try {
      await cadastrarHistorico({
        ...form,
        idResidencia: Number(form.idResidencia),
        producao: Number(form.producao),
        consumo: Number(form.consumo),
        saldoEnergetico, // Passando o saldo energético calculado
        dataRegistro, // Passando a data de registro
      });

      alert("Histórico cadastrado com sucesso!");
      setForm({
        idResidencia: "",
        producao: "",
        consumo: "",
        saldoEnergetico: 0,
        dataRegistro: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar histórico:", error);
      alert("Falha ao cadastrar histórico.");
    }
  };

  return (
    <Container img="cadastro-bg.jpg">
      <section className="cadastro_section">
        <h1>Cadastrar Histórico de Energia</h1>
        <p className="cadastro-description">Registre aqui o histórico de produção e consumo de energia de sua residência.
           Com essas informações, você poderá acompanhar o saldo energético, identificar
            padrões de consumo e tomar decisões mais informadas para economizar e melhorar
             a eficiência energética.</p>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <input
            type="number"
            name="idResidencia"
            placeholder="ID da Residência"
            value={form.idResidencia}
            onChange={handleChange}
          />
          <input
            type="number"
            name="producao"
            placeholder="Produção (kWh)"
            value={form.producao}
            onChange={handleChange}
          />
          <input
            type="number"
            name="consumo"
            placeholder="Consumo (kWh)"
            value={form.consumo}
            onChange={handleChange}
          />
          <button type="submit">Cadastrar Histórico</button>
        </form>
        <button
          className="view-residences-button"
          onClick={() => router.push("/historicoConsumo")}
        >
          Ver Históricos Cadastrados
        </button>
      </section>
    </Container>
  );
};

export default CadastroHistorico;
