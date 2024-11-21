"use client";

import { useRouter } from "next/navigation";
import React from "react";
import "./loginForm.css";
import { useForm } from "react-hook-form";
import { LoginProps } from "@/types/login";
import { toast } from "react-toastify";
import { useUser } from "@/context/UserContext";
import { validateUser } from "@/lib/api";

const LoginForm = () => {
  const router = useRouter();
  const { login } = useUser();

  const { register, handleSubmit, reset } = useForm<LoginProps>();

  const onSubmit = async (data: LoginProps) => {
    try {
      await validateUser(data);
      login(data);
      toast.success("Login realizado!");
      reset();
      router.push("/");
    } catch (error) {
      toast.error("Usuário ou senha incorretos!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
      <input type="text" placeholder="Usuário" {...register("login")} required />
      <input
        type="password"
        placeholder="Senha"
        {...register("senha")}
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
