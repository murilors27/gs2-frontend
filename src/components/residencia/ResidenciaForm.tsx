import React, { useState } from 'react';

interface ResidenciaFormProps {
  onSubmit: (dados: any) => void;
  initialValues?: any;
}

const ResidenciaForm: React.FC<ResidenciaFormProps> = ({ onSubmit, initialValues }) => {
  const [form, setForm] = useState(initialValues || {
    nomeResponsavel: '',
    endereco: '',
    capacidadeGeracao: '',
    tipoFonte: '',
    limiteConsumo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="residencia-form">
      <label>
        Nome do Responsável:
        <input
          type="text"
          name="nomeResponsavel"
          value={form.nomeResponsavel}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Endereço:
        <input
          type="text"
          name="endereco"
          value={form.endereco}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Capacidade de Geração (kWh):
        <input
          type="number"
          name="capacidadeGeracao"
          value={form.capacidadeGeracao}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Tipo de Fonte:
        <select
          name="tipoFonte"
          value={form.tipoFonte}
          onChange={handleChange}
          required
        >
          <option value="">Selecione...</option>
          <option value="solar">Solar</option>
          <option value="eolica">Eólica</option>
          <option value="hidrica">Hídrica</option>
        </select>
      </label>
      <label>
        Limite de Consumo:
        <input
          type="number"
          name="limiteConsumo"
          value={form.limiteConsumo}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ResidenciaForm;
