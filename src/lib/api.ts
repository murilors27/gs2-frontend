import { LoginProps } from "@/types/login";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

type apiError = {
  erro: string;
};

export const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000/api/usuarios",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function createUser(data: LoginProps) {
  try {
    await axiosInstance.post("", data);
  } catch (error) {
    throw new Error("Erro ao cadastrar usuário");
  }
}

export async function validateUser(data: LoginProps) {
  try {
    await axiosInstance.post("/login", data);
  } catch (error) {
    throw new Error("Usuário ou senha incorretos");
  }
}
