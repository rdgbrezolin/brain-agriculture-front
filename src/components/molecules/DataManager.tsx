import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/redux";
import { resetToInitialData } from "../../store/producersSlice";
import { StorageService } from "../../services/storageService";

const DataManagerContainer = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  margin: 24px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Button = styled.button<{ variant?: "primary" | "danger" | "secondary" }>`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${(props) => {
    switch (props.variant) {
      case "danger":
        return "#dc3545";
      case "secondary":
        return "#6c757d";
      default:
        return "#007bff";
    }
  }};
  color: white;

  &:hover {
    background: ${(props) => {
      switch (props.variant) {
        case "danger":
          return "#c82333";
        case "secondary":
          return "#5a6268";
        default:
          return "#0056b3";
      }
    }};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Info = styled.div`
  margin-top: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 6px;
  font-size: 14px;
  color: #666;
`;

export const DataManager: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleResetToInitial = () => {
    if (
      window.confirm(
        "Tem certeza que deseja resetar os dados para os valores iniciais?"
      )
    ) {
      StorageService.resetToInitialData();
      dispatch(resetToInitialData());
      alert("Dados resetados para os valores iniciais!");
    }
  };

  const handleClearAllData = () => {
    if (
      window.confirm(
        "Tem certeza que deseja limpar todos os dados? Esta ação não pode ser desfeita."
      )
    ) {
      StorageService.clearAllData();
      dispatch(resetToInitialData());
      alert("Todos os dados foram limpos!");
    }
  };

  const handleExportData = () => {
    const data = StorageService.loadProducers();
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "brain-agriculture-data.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  const hasStoredData = StorageService.hasStoredData();

  return (
    <DataManagerContainer>
      <Title>Gerenciamento de Dados</Title>

      <ButtonGroup>
        <Button onClick={handleResetToInitial}>
          Resetar para Dados Iniciais
        </Button>

        <Button variant="secondary" onClick={handleExportData}>
          Exportar Dados
        </Button>

        <Button variant="danger" onClick={handleClearAllData}>
          Limpar Todos os Dados
        </Button>
      </ButtonGroup>

      <Info>
        <strong>Status:</strong>{" "}
        {hasStoredData ? "Dados salvos no navegador" : "Usando dados iniciais"}
        <br />
        <strong>Localização:</strong> localStorage do navegador
        <br />
        <strong>Nota:</strong> Os dados são persistidos localmente e sobrevivem
        a atualizações da página.
      </Info>
    </DataManagerContainer>
  );
};
