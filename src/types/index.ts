export interface Producer {
  id: string;
  cpfCnpj: string;
  name: string;
  farms: Farm[];
}

export interface Farm {
  id: string;
  name: string;
  city: string;
  state: string;
  totalArea: number; // hectares
  agriculturalArea: number; // hectares
  vegetationArea: number; // hectares
  crops: Crop[];
}

export interface Crop {
  id: string;
  name: string;
  harvest: string; // ex: "Safra 2021"
  area: number; // hectares
}

export interface DashboardStats {
  totalFarms: number;
  totalHectares: number;
  stateDistribution: ChartData[];
  cropDistribution: ChartData[];
  landUseDistribution: ChartData[];
}

export interface ChartData {
  name: string;
  value: number;
  percentage: number;
}

export interface FormData {
  cpfCnpj: string;
  name: string;
  farmName: string;
  city: string;
  state: string;
  totalArea: number;
  agriculturalArea: number;
  vegetationArea: number;
  crops: Omit<Crop, "id">[];
}

export interface ValidationError {
  field: string;
  message: string;
}
