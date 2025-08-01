import React from "react";
import styled from "styled-components";
import { Card } from "../atoms/Card";
import { Button } from "../atoms/Button";
import type { Producer } from "../../types";

const ListContainer = styled.div`
  width: 100%;
`;

const ProducerCard = styled(Card)`
  margin-bottom: 20px;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    margin-bottom: 12px;
  }
`;

const ProducerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #dee2e6;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const ProducerInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

const ProducerName = styled.h3`
  margin: 0 0 4px 0;
  color: #333;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ProducerCPF = styled.p`
  margin: 0;
  color: #6c757d;
  font-size: 14px;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const FarmsSection = styled.div`
  margin-top: 16px;
`;

const FarmCard = styled.div`
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 12px;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const FarmHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const FarmName = styled.h4`
  margin: 0;
  color: #333;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FarmLocation = styled.p`
  margin: 0 0 8px 0;
  color: #6c757d;
  font-size: 14px;
`;

const FarmAreas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const AreaInfo = styled.div`
  text-align: center;
  padding: 8px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  flex: 1;
  min-width: 120px;

  @media (max-width: 768px) {
    padding: 6px;
    min-width: 100px;
  }

  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

const AreaValue = styled.div`
  font-weight: bold;
  color: #007bff;
  font-size: 14px;
`;

const AreaLabel = styled.div`
  font-size: 12px;
  color: #6c757d;
  margin-top: 2px;
`;

const CropsSection = styled.div`
  margin-top: 12px;
`;

const CropsTitle = styled.h5`
  margin: 0 0 8px 0;
  color: #333;
  font-size: 14px;
  font-weight: 600;
`;

const CropsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CropTag = styled.span`
  background-color: #007bff;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 48px 24px;
  color: #6c757d;
`;

interface ProducersListProps {
  producers: Producer[];
  onEdit: (producer: Producer) => void;
  onDelete: (producerId: string) => void;
}

export const ProducersList: React.FC<ProducersListProps> = ({
  producers,
  onEdit,
  onDelete,
}) => {
  if (producers.length === 0) {
    return (
      <ListContainer>
        <EmptyState>
          <h3>Nenhum produtor cadastrado</h3>
          <p>Comece cadastrando o primeiro produtor rural.</p>
        </EmptyState>
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <h1
        style={{
          marginBottom: "32px",
          color: "#333",
          fontSize: "28px",
          fontWeight: "600",
        }}
      >
        Produtores Rurais
      </h1>

      {producers.map((producer) => (
        <ProducerCard key={producer.id}>
          <ProducerHeader>
            <ProducerInfo>
              <ProducerName>{producer.name}</ProducerName>
              <ProducerCPF>{producer.cpfCnpj}</ProducerCPF>
            </ProducerInfo>
            <ActionsContainer>
              <Button
                variant="secondary"
                size="small"
                onClick={() => onEdit(producer)}
              >
                Editar
              </Button>
              <Button
                variant="danger"
                size="small"
                onClick={() => onDelete(producer.id)}
              >
                Excluir
              </Button>
            </ActionsContainer>
          </ProducerHeader>

          <FarmsSection>
            <h4
              style={{
                marginBottom: "16px",
                color: "#333",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Fazendas ({producer.farms.length})
            </h4>

            {producer.farms.map((farm) => (
              <FarmCard key={farm.id}>
                <FarmHeader>
                  <FarmName>{farm.name}</FarmName>
                </FarmHeader>

                <FarmLocation>
                  {farm.city}, {farm.state}
                </FarmLocation>

                <FarmAreas>
                  <AreaInfo>
                    <AreaValue>{farm.totalArea} ha</AreaValue>
                    <AreaLabel>Área Total</AreaLabel>
                  </AreaInfo>
                  <AreaInfo>
                    <AreaValue>{farm.agriculturalArea} ha</AreaValue>
                    <AreaLabel>Agricultável</AreaLabel>
                  </AreaInfo>
                  <AreaInfo>
                    <AreaValue>{farm.vegetationArea} ha</AreaValue>
                    <AreaLabel>Vegetação</AreaLabel>
                  </AreaInfo>
                </FarmAreas>

                {farm.crops.length > 0 && (
                  <CropsSection>
                    <CropsTitle>
                      Culturas Plantadas ({farm.crops.length})
                    </CropsTitle>
                    <CropsList>
                      {farm.crops.map((crop) => (
                        <CropTag key={crop.id}>
                          {crop.name} - {crop.harvest} ({crop.area} ha)
                        </CropTag>
                      ))}
                    </CropsList>
                  </CropsSection>
                )}
              </FarmCard>
            ))}
          </FarmsSection>
        </ProducerCard>
      ))}
    </ListContainer>
  );
};
