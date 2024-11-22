import axios from "axios";

// Criando uma instância do Axios
const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

// Funções para interagir com o backend

export const cadastrarResidencia = async (residencia: any) => {
  try {
    const response = await api.post("/residencias", residencia);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar residência:", error);
    throw error;
  }
};

export const buscarResidencias = async () => {
  try {
    const response = await api.get("/residencias");
    console.log("Resposta completa da API:", response);
    console.log("Resposta da API (dados):", response.data);
    return response;
  } catch (error) {
    console.error("Erro ao buscar residências:", error);
    throw error;
  }
};



export const cadastrarHistorico = async (historico: any) => {
  try {
    const response = await api.post("/historico-energia", historico);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar histórico:", error);
    throw error;
  }
};

export const buscarHistoricoPorResidencia = async (idResidencia: number) => {
  try {
    console.log("Buscando histórico para a residência:", idResidencia);
    const response = await api.get(`/historico-energia/residencia/${idResidencia}`);
    console.log("Resposta da API (dados):", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar histórico:", error);
    throw error;
  }
};

export default api;
