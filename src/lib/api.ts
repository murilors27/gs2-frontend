import axios from "axios";

// Configuração base do Axios
const api = axios.create({
  baseURL: "http://localhost:8080", // Substitua pela URL da sua API
});

// Função para cadastrar uma residência
export const cadastrarResidencia = async (residencia: any) => {
  return await api.post("/residencias", residencia);
};

// Função para buscar todas as residências
export const buscarResidencias = async () => {
  return await api.get("/residencias");
};

// Função para cadastrar um histórico de energia
export const cadastrarHistorico = async (historico: any) => {
  return await api.post("/historico-energia", historico);
};

// Função para buscar históricos por residência
export const buscarHistoricoPorResidencia = async (idResidencia: number) => {
  return await api.get(`/historico-energia/${idResidencia}`);
};

export default api;
