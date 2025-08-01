import styled from "styled-components";

interface CardProps {
  padding?: string;
  margin?: string;
  shadow?: boolean;
}

const StyledCard = styled.div<CardProps>`
  background-color: white;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  padding: ${(props) => props.padding || "24px"};
  margin: ${(props) => props.margin || "0"};
  box-shadow: ${(props) =>
    props.shadow ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"};
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: ${(props) =>
      props.shadow ? "0 6px 12px rgba(0, 0, 0, 0.15)" : "none"};
  }

  @media (max-width: 768px) {
    padding: ${(props) => props.padding || "20px"};
  }

  @media (max-width: 480px) {
    padding: ${(props) => props.padding || "16px"};
  }
`;

interface CardComponentProps extends CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardComponentProps> = ({
  children,
  padding,
  margin,
  shadow = true,
  ...props
}) => {
  return (
    <StyledCard padding={padding} margin={margin} shadow={shadow} {...props}>
      {children}
    </StyledCard>
  );
};
