import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { Dashboard } from "../organisms/Dashboard";

export const DashboardPage: React.FC = () => {
  const producers = useAppSelector((state: any) => state.producers.producers);

  return <Dashboard producers={producers} />;
};
