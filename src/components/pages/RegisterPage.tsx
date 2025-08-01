import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ProducerForm } from "../organisms/ProducerForm";
import { addProducer, updateProducer } from "../../store/producersSlice";
import type { Producer, FormData } from "../../types";

export const RegisterPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const producers = useAppSelector((state: any) => state.producers.producers);

  const editingProducer = id
    ? producers.find((p: Producer) => p.id === id)
    : undefined;

  const handleSubmit = (data: FormData) => {
    if (editingProducer) {
      const updatedProducer: Producer = {
        ...editingProducer,
        cpfCnpj: data.cpfCnpj,
        name: data.name,
        farms: [
          {
            id: editingProducer.farms[0]?.id || Date.now().toString(),
            name: data.farmName,
            city: data.city,
            state: data.state,
            totalArea: data.totalArea,
            agriculturalArea: data.agriculturalArea,
            vegetationArea: data.vegetationArea,
            crops: data.crops.map((crop, index) => ({
              id:
                editingProducer.farms[0]?.crops[index]?.id ||
                Date.now().toString(),
              name: crop.name,
              harvest: crop.harvest,
              area: crop.area,
            })),
          },
        ],
      };
      dispatch(updateProducer(updatedProducer));
    } else {
      const newProducer: Producer = {
        id: Date.now().toString(),
        cpfCnpj: data.cpfCnpj,
        name: data.name,
        farms: [
          {
            id: Date.now().toString(),
            name: data.farmName,
            city: data.city,
            state: data.state,
            totalArea: data.totalArea,
            agriculturalArea: data.agriculturalArea,
            vegetationArea: data.vegetationArea,
            crops: data.crops.map((crop, index) => ({
              id: (Date.now() + index).toString(),
              name: crop.name,
              harvest: crop.harvest,
              area: crop.area,
            })),
          },
        ],
      };
      dispatch(addProducer(newProducer));
    }

    navigate("/");
  };

  const initialData = editingProducer
    ? {
        cpfCnpj: editingProducer.cpfCnpj,
        name: editingProducer.name,
        farmName: editingProducer.farms[0]?.name || "",
        city: editingProducer.farms[0]?.city || "",
        state: editingProducer.farms[0]?.state || "",
        totalArea: editingProducer.farms[0]?.totalArea || 0,
        agriculturalArea: editingProducer.farms[0]?.agriculturalArea || 0,
        vegetationArea: editingProducer.farms[0]?.vegetationArea || 0,
        crops:
          editingProducer.farms[0]?.crops.map((crop: any) => ({
            name: crop.name,
            harvest: crop.harvest,
            area: crop.area,
          })) || [],
      }
    : undefined;

  return (
    <div>
      <ProducerForm
        onSubmit={handleSubmit}
        initialData={initialData}
        isEditing={!!editingProducer}
      />
    </div>
  );
};
