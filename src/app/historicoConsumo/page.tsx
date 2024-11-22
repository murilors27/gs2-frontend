"use client"; // Direto no início do arquivo, caso precise usar hooks

import React, { useState, useEffect } from "react";
import Container from "@/components/container"; // Componente Container já existente
import './historico.css'; // Estilos específicos desta página

const HistoricoConsumoPage = () => {
    const [historico, setHistorico] = useState<any[]>([]); // Exemplo de estado para os dados

    useEffect(() => {
        // Aqui você pode buscar os dados da API para preencher o histórico
        const fetchHistorico = async () => {
            try {
                const response = await fetch("/api/historico");
                const data = await response.json();
                setHistorico(data);
            } catch (error) {
                console.error("Erro ao carregar o histórico:", error);
            }
        };
        fetchHistorico();
    }, []); // O array vazio faz com que o useEffect execute uma vez, como componentDidMount

    return (
    <div className="historicoContainer"> {/* Container da página de histórico */}
        <Container img="/path/to/your/image.jpg"> {/* Se precisar passar img, forneça o caminho aqui */}
            <h1>Histórico de Consumo e Produção</h1>
            <div className="relatorioResumo">
                {/* Exemplo de renderização de dados */}
                <h2>RESUMO</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Mês</th>
                            <th>Total Produzido (kWh)</th>
                            <th>Total Consumido (kWh)</th>
                            <th>Saldo Energético (kWh)</th>
                            <th>Redistribuição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historico.map((item, index) => (
                            <tr key={index}>
                                <td>{item.mes}</td>
                                <td>{item.totalProduzido}</td>
                                <td>{item.totalConsumido}</td>
                                <td>{item.saldoEnergetico}</td>
                                <td>{item.redistribuicao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Container>
    </div>
        
    );
};

export default HistoricoConsumoPage;
