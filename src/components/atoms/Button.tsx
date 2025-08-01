import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "8px 16px";
      case "large":
        return "16px 32px";
      default:
        return "12px 24px";
    }
  }};
  border: none;
  border-radius: 6px;
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "14px";
      case "large":
        return "18px";
      default:
        return "16px";
    }
  }};
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;

  ${(props) => {
    switch (props.variant) {
      case "secondary":
        return `
          background-color: #f8f9fa;
          color: #495057;
          border: 1px solid #dee2e6;
          &:hover:not(:disabled) {
            background-color: #e9ecef;
            border-color: #adb5bd;
          }
        `;
      case "danger":
        return `
          background-color: #dc3545;
          color: white;
          &:hover:not(:disabled) {
            background-color: #c82333;
          }
        `;
      default:
        return `
          background-color: #007bff;
          color: white;
          &:hover:not(:disabled) {
            background-color: #0056b3;
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
  }
`;

interface ButtonComponentProps extends ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonComponentProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  type = "button",
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
