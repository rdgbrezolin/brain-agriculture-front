import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Select } from "../atoms/Select";
import { Card } from "../atoms/Card";
import { validateCPFCNPJ, formatCPFCNPJ } from "../../utils/validation";
import { states, harvests } from "../../mocks/data";
import type { FormData } from "../../types";

const FormContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const FormSection = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 16px;
  color: #333;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 14px;
  margin-top: 4px;
`;

const CropsSection = styled.div`
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 16px;
  margin-top: 16px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const CropItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px;
  background-color: #f8f9fa;
  border-radius: 4px;

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const validationSchema = yup
  .object({
    cpfCnpj: yup
      .string()
      .required("CPF/CNPJ é obrigatório")
      .test("valid-cpf-cnpj", "CPF/CNPJ inválido", validateCPFCNPJ),
    name: yup.string().required("Nome é obrigatório"),
    farmName: yup.string().required("Nome da fazenda é obrigatório"),
    city: yup.string().required("Cidade é obrigatória"),
    state: yup.string().required("Estado é obrigatório"),
    totalArea: yup
      .number()
      .required("Área total é obrigatória")
      .positive("Área total deve ser positiva"),
    agriculturalArea: yup
      .number()
      .required("Área agricultável é obrigatória")
      .positive("Área agricultável deve ser positiva"),
    vegetationArea: yup
      .number()
      .required("Área de vegetação é obrigatória")
      .positive("Área de vegetação deve ser positiva"),
    crops: yup.array().of(
      yup.object({
        name: yup.string().required("Nome da cultura é obrigatório"),
        harvest: yup.string().required("Safra é obrigatória"),
        area: yup
          .number()
          .required("Área da cultura é obrigatória")
          .positive("Área da cultura deve ser positiva"),
      })
    ),
  })
  .test(
    "area-validation",
    "A soma das áreas não pode ultrapassar a área total",
    function (value) {
      if (!value.totalArea || !value.agriculturalArea || !value.vegetationArea)
        return true;

      const totalAreas = value.agriculturalArea + value.vegetationArea;
      return totalAreas <= value.totalArea;
    }
  );

interface ProducerFormProps {
  onSubmit: (data: FormData) => void;
  initialData?: FormData;
  isEditing?: boolean;
}

export const ProducerForm: React.FC<ProducerFormProps> = ({
  onSubmit,
  initialData,
  isEditing = false,
}) => {
  const [crops, setCrops] = useState<Omit<FormData["crops"][0], "id">[]>(
    initialData?.crops || []
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialData || {
      cpfCnpj: "",
      name: "",
      farmName: "",
      city: "",
      state: "",
      totalArea: 0,
      agriculturalArea: 0,
      vegetationArea: 0,
      crops: [],
    },
    mode: "onSubmit",
  });

  const watchedTotalArea = watch("totalArea");
  const watchedAgriculturalArea = watch("agriculturalArea");
  const watchedVegetationArea = watch("vegetationArea");

  const handleAddCrop = () => {
    const newCrop = {
      name: "",
      harvest: "",
      area: 0,
    };
    setCrops([...crops, newCrop]);
  };

  const handleRemoveCrop = (index: number) => {
    const newCrops = crops.filter((_, i) => i !== index);
    setCrops(newCrops);
    setValue("crops", newCrops);
  };

  const handleCropChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const newCrops = [...crops];
    newCrops[index] = { ...newCrops[index], [field]: value };
    setCrops(newCrops);
    setValue("crops", newCrops);
  };

  const onSubmitForm = (data: any) => {
    onSubmit({ ...data, crops });
  };

  const stateOptions = states.map((state) => ({ value: state, label: state }));
  const cropOptions = [
    "Soja",
    "Milho",
    "Café",
    "Trigo",
    "Arroz",
    "Feijão",
    "Algodão",
    "Cana-de-açúcar",
    "Laranja",
    "Uva",
    "Banana",
    "Maçã",
  ].map((crop) => ({ value: crop, label: crop }));
  const harvestOptions = harvests.map((harvest) => ({
    value: harvest,
    label: harvest,
  }));

  return (
    <FormContainer>
      <Card>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <FormSection>
            <SectionTitle>Dados do Produtor</SectionTitle>
            <FormRow>
              <FormField>
                <Label>CPF/CNPJ</Label>
                <Controller
                  name="cpfCnpj"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="000.000.000-00"
                      error={!!errors.cpfCnpj}
                      onChange={(e) => {
                        const formatted = formatCPFCNPJ(e.target.value);
                        field.onChange(formatted);
                      }}
                    />
                  )}
                />
                {errors.cpfCnpj && (
                  <ErrorMessage>{errors.cpfCnpj.message}</ErrorMessage>
                )}
              </FormField>
              <FormField>
                <Label>Nome do Produtor</Label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Nome completo"
                      error={!!errors.name}
                    />
                  )}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </FormField>
            </FormRow>
          </FormSection>

          <FormSection>
            <SectionTitle>Dados da Fazenda</SectionTitle>
            <FormRow>
              <FormField>
                <Label>Nome da Fazenda</Label>
                <Controller
                  name="farmName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Nome da propriedade"
                      error={!!errors.farmName}
                    />
                  )}
                />
                {errors.farmName && (
                  <ErrorMessage>{errors.farmName.message}</ErrorMessage>
                )}
              </FormField>
              <FormField>
                <Label>Cidade</Label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Nome da cidade"
                      error={!!errors.city}
                    />
                  )}
                />
                {errors.city && (
                  <ErrorMessage>{errors.city.message}</ErrorMessage>
                )}
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <Label>Estado</Label>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={stateOptions}
                      placeholder="Selecione o estado"
                      error={!!errors.state}
                    />
                  )}
                />
                {errors.state && (
                  <ErrorMessage>{errors.state.message}</ErrorMessage>
                )}
              </FormField>
              <FormField>
                <Label>Área Total (ha)</Label>
                <Controller
                  name="totalArea"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="number"
                      placeholder="0"
                      error={!!errors.totalArea}
                      value={field.value || ""}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  )}
                />
                {errors.totalArea && (
                  <ErrorMessage>{errors.totalArea.message}</ErrorMessage>
                )}
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <Label>Área Agricultável (ha)</Label>
                <Controller
                  name="agriculturalArea"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="number"
                      placeholder="0"
                      error={!!errors.agriculturalArea}
                      value={field.value || ""}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  )}
                />
                {errors.agriculturalArea && (
                  <ErrorMessage>{errors.agriculturalArea.message}</ErrorMessage>
                )}
              </FormField>
              <FormField>
                <Label>Área de Vegetação (ha)</Label>
                <Controller
                  name="vegetationArea"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="number"
                      placeholder="0"
                      error={!!errors.vegetationArea}
                      value={field.value || ""}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  )}
                />
                {errors.vegetationArea && (
                  <ErrorMessage>{errors.vegetationArea.message}</ErrorMessage>
                )}
              </FormField>
            </FormRow>

            {watchedTotalArea &&
              watchedAgriculturalArea &&
              watchedVegetationArea && (
                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "14px",
                    color: "#6c757d",
                  }}
                >
                  Soma das áreas:{" "}
                  {watchedAgriculturalArea + watchedVegetationArea} ha /{" "}
                  {watchedTotalArea} ha
                  {watchedAgriculturalArea + watchedVegetationArea >
                    watchedTotalArea && (
                    <div style={{ color: "#dc3545", marginTop: "4px" }}>
                      ⚠️ A soma das áreas não pode ultrapassar a área total
                    </div>
                  )}
                </div>
              )}
          </FormSection>

          <FormSection>
            <SectionTitle>Culturas Plantadas</SectionTitle>
            <CropsSection>
              {crops.map((crop, index) => (
                <CropItem key={index}>
                  <Select
                    options={cropOptions}
                    value={crop.name}
                    onChange={(e) =>
                      handleCropChange(index, "name", e.target.value)
                    }
                    placeholder="Selecione a cultura"
                  />
                  <Select
                    options={harvestOptions}
                    value={crop.harvest}
                    onChange={(e) =>
                      handleCropChange(index, "harvest", e.target.value)
                    }
                    placeholder="Selecione a safra"
                  />
                  <Input
                    type="number"
                    placeholder="Área (ha)"
                    value={crop.area || ""}
                    onChange={(e) =>
                      handleCropChange(index, "area", Number(e.target.value))
                    }
                  />
                  <Button
                    variant="danger"
                    size="small"
                    onClick={() => handleRemoveCrop(index)}
                  >
                    Remover
                  </Button>
                </CropItem>
              ))}
              <Button
                variant="secondary"
                size="small"
                onClick={handleAddCrop}
                type="button"
              >
                Adicionar Cultura
              </Button>
            </CropsSection>
          </FormSection>

          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <Button type="submit" size="large">
              {isEditing ? "Atualizar Produtor" : "Cadastrar Produtor"}
            </Button>
          </div>
        </form>
      </Card>
    </FormContainer>
  );
};
