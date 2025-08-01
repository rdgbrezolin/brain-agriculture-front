import React, { useMemo } from "react";
import styled from "styled-components";
import { Card } from "../atoms/Card";
import { PieChart } from "../molecules/PieChart";
import type { Producer, DashboardStats, ChartData } from "../../types";

const DashboardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 32px 0;
`;

const StatsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const StatCard = styled(Card)`
  text-align: center;
  padding: 24px;
  flex: 1;
  min-width: 280px;

  @media (max-width: 768px) {
    padding: 20px;
    min-width: 240px;
  }

  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

const StatValue = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: #6c757d;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ChartsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 32px;

  @media (max-width: 768px) {
    gap: 24px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const ChartCard = styled(Card)`
  min-height: 400px;
  padding: 24px;
  flex: 1;
  min-width: 450px;

  @media (max-width: 768px) {
    min-height: 350px;
    padding: 20px;
    min-width: 100%;
  }

  @media (max-width: 480px) {
    min-height: 300px;
    padding: 16px;
  }
`;

interface DashboardProps {
  producers: Producer[];
}

export const Dashboard: React.FC<DashboardProps> = ({ producers }) => {
  const stats = useMemo((): DashboardStats => {
    const totalFarms = producers.reduce(
      (acc, producer) => acc + producer.farms.length,
      0
    );
    const totalHectares = producers.reduce(
      (acc, producer) =>
        acc +
        producer.farms.reduce((farmAcc, farm) => farmAcc + farm.totalArea, 0),
      0
    );

    const stateMap = new Map<string, number>();
    producers.forEach((producer) => {
      producer.farms.forEach((farm) => {
        const current = stateMap.get(farm.state) || 0;
        stateMap.set(farm.state, current + farm.totalArea);
      });
    });

    const stateDistribution: ChartData[] = Array.from(stateMap.entries())
      .map(([state, area]) => ({
        name: state,
        value: area,
        percentage: Math.round((area / totalHectares) * 100),
      }))
      .sort((a, b) => b.value - a.value);

    const cropMap = new Map<string, number>();
    producers.forEach((producer) => {
      producer.farms.forEach((farm) => {
        farm.crops.forEach((crop) => {
          const current = cropMap.get(crop.name) || 0;
          cropMap.set(crop.name, current + crop.area);
        });
      });
    });

    const cropDistribution: ChartData[] = Array.from(cropMap.entries())
      .map(([crop, area]) => ({
        name: crop,
        value: area,
        percentage: Math.round((area / totalHectares) * 100),
      }))
      .sort((a, b) => b.value - a.value);

    const totalAgriculturalArea = producers.reduce(
      (acc, producer) =>
        acc +
        producer.farms.reduce(
          (farmAcc, farm) => farmAcc + farm.agriculturalArea,
          0
        ),
      0
    );
    const totalVegetationArea = producers.reduce(
      (acc, producer) =>
        acc +
        producer.farms.reduce(
          (farmAcc, farm) => farmAcc + farm.vegetationArea,
          0
        ),
      0
    );

    const landUseDistribution: ChartData[] = [
      {
        name: "Área Agricultável",
        value: totalAgriculturalArea,
        percentage: Math.round((totalAgriculturalArea / totalHectares) * 100),
      },
      {
        name: "Área de Vegetação",
        value: totalVegetationArea,
        percentage: Math.round((totalVegetationArea / totalHectares) * 100),
      },
    ];

    return {
      totalFarms,
      totalHectares,
      stateDistribution,
      cropDistribution,
      landUseDistribution,
    };
  }, [producers]);

  return (
    <DashboardContainer>
      <h1
        style={{
          marginBottom: "32px",
          color: "#333",
          fontSize: "28px",
          fontWeight: "600",
        }}
      >
        Dashboard - Brain Agriculture
      </h1>

      <StatsGrid>
        <StatCard>
          <StatValue>{stats.totalFarms}</StatValue>
          <StatLabel>Total de Fazendas</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>
            {stats.totalHectares.toLocaleString("pt-BR")} ha
          </StatValue>
          <StatLabel>Total de Hectares</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{producers.length}</StatValue>
          <StatLabel>Total de Produtores</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>
            {producers.reduce(
              (acc, producer) =>
                acc +
                producer.farms.reduce(
                  (farmAcc, farm) => farmAcc + farm.crops.length,
                  0
                ),
              0
            )}
          </StatValue>
          <StatLabel>Total de Culturas</StatLabel>
        </StatCard>
      </StatsGrid>

      <ChartsGrid>
        <ChartCard>
          <PieChart
            data={stats.stateDistribution}
            title="Distribuição por Estado"
          />
        </ChartCard>
        <ChartCard>
          <PieChart
            data={stats.cropDistribution}
            title="Distribuição por Cultura"
          />
        </ChartCard>
        <ChartCard>
          <PieChart
            data={stats.landUseDistribution}
            title="Distribuição por Uso do Solo"
          />
        </ChartCard>
      </ChartsGrid>
    </DashboardContainer>
  );
};
