import styled from "styled-components";

interface SelectProps {
  error?: boolean;
  fullWidth?: boolean;
}

const StyledSelect = styled.select<SelectProps>`
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.error ? "#dc3545" : "#dee2e6")};
  border-radius: 6px;
  font-size: 16px;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  background-color: white;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? "#dc3545" : "#007bff")};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.error ? "rgba(220, 53, 69, 0.25)" : "rgba(0, 123, 255, 0.25)"};
  }

  &:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }
`;

interface SelectOption {
  value: string;
  label: string;
}

interface SelectComponentProps extends SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
}

export const Select: React.FC<SelectComponentProps> = ({
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
  error = false,
  fullWidth = false,
  name,
  id,
  ...props
}) => {
  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      name={name}
      id={id}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};
