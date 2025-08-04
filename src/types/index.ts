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
  totalArea: number;
  agriculturalArea: number;
  vegetationArea: number;
  crops: Crop[];
}

export interface Crop {
  id: string;
  name: string;
  harvest: string;
  area: number;
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
  farms: Farm[];
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface State {
  producers: Producer[];
}

export interface RootState {
  producers: State;
}
