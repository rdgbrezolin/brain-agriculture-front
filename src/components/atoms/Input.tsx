import styled from "styled-components";

interface InputProps {
  error?: boolean;
  fullWidth?: boolean;
}

const StyledInput = styled.input<InputProps>`
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.error ? "#dc3545" : "#dee2e6")};
  border-radius: 6px;
  font-size: 16px;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? "#dc3545" : "#007bff")};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.error ? "rgba(220, 53, 69, 0.25)" : "rgba(0, 123, 255, 0.25)"};
  }

  &::placeholder {
    color: #6c757d;
  }

  &:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }
`;

interface InputComponentProps extends InputProps {
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
}

export const Input: React.FC<InputComponentProps> = ({
  placeholder,
  value,
  onChange,
  type = "text",
  disabled = false,
  error = false,
  fullWidth = false,
  name,
  id,
  ...props
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      name={name}
      id={id}
      {...props}
    />
  );
};
