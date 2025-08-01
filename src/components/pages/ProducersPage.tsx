import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { ProducersList } from "../organisms/ProducersList";
import { DataManager } from "../molecules/DataManager";
import { deleteProducer } from "../../store/producersSlice";
import type { Producer } from "../../types";

export const ProducersPage: React.FC = () => {
  const producers = useAppSelector((state: any) => state.producers.producers);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEdit = (producer: Producer) => {
    navigate(`/editar/${producer.id}`);
  };

  const handleDelete = (producerId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este produtor?")) {
      dispatch(deleteProducer(producerId));
    }
  };

  return (
    <div>
      <DataManager />
      <ProducersList
        producers={producers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};
