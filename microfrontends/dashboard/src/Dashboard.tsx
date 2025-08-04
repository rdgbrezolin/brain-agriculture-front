import React from "react";
import styled from "styled-components";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const DashboardContainer = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
  padding: 32px 0;
`;

const DashboardContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Title = styled.h1`
  margin: 0 0 32px 0;
  font-size: 32px;
  font-weight: 600;
  color: #1a1a1a;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const StatsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const StatCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 200px;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: #666666;
  font-weight: 500;
`;

const ChartsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const ChartCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 300px;
`;

const ChartTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  text-align: center;
`;

const stateData = [
  { name: "SP", value: 45, color: "#8884d8" },
  { name: "MG", value: 25, color: "#82ca9d" },
  { name: "PR", value: 15, color: "#ffc658" },
  { name: "GO", value: 10, color: "#ff7300" },
  { name: "Outros", value: 5, color: "#8dd1e1" },
];

const cropData = [
  { name: "Soja", value: 40, color: "#8884d8" },
  { name: "Milho", value: 25, color: "#82ca9d" },
  { name: "Café", value: 20, color: "#ffc658" },
  { name: "Algodão", value: 10, color: "#ff7300" },
  { name: "Outros", value: 5, color: "#8dd1e1" },
];

const landUseData = [
  { name: "Agrícola", value: 65, color: "#82ca9d" },
  { name: "Vegetação", value: 35, color: "#8884d8" },
];

export const Dashboard: React.FC = () => {
  const totalFarms = 150;
  const totalHectares = 25000;
  const totalProducers = 89;

  return (
    <DashboardContainer>
      <DashboardContent>
        <Title>Dashboard - Brain Agriculture</Title>

        <StatsGrid>
          <StatCard>
            <StatNumber>{totalFarms}</StatNumber>
            <StatLabel>Fazendas Cadastradas</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>{totalHectares.toLocaleString()}</StatNumber>
            <StatLabel>Hectares Registrados</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>{totalProducers}</StatNumber>
            <StatLabel>Produtores Ativos</StatLabel>
          </StatCard>
        </StatsGrid>

        <ChartsGrid>
          <ChartCard>
            <ChartTitle>Distribuição por Estado</ChartTitle>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stateData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${((percent || 0) * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stateData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard>
            <ChartTitle>Distribuição por Cultura</ChartTitle>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={cropData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${((percent || 0) * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {cropData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard>
            <ChartTitle>Uso do Solo</ChartTitle>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={landUseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${((percent || 0) * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {landUseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </ChartsGrid>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
