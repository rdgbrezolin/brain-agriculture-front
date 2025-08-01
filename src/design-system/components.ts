import styled from "styled-components";
import { theme } from "./theme";

// ===== COMPONENTES BASE =====

export const Container = styled.div<{
  maxWidth?: string;
  padding?: string;
  margin?: string;
}>`
  width: 100%;
  max-width: ${(props) => props.maxWidth || "1400px"};
  margin: ${(props) => props.margin || "0 auto"};
  padding: ${(props) => props.padding || "0"};
  box-sizing: border-box;
`;

export const Grid = styled.div<{
  columns?: number;
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
}>`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.gap || theme.spacing[4]};
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "start"};

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Flex = styled.div<{
  direction?: "row" | "column";
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "0"};
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "start"};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
`;

export const Section = styled.section<{
  padding?: string;
  margin?: string;
  background?: string;
}>`
  padding: ${(props) => props.padding || theme.spacing[6]};
  margin: ${(props) => props.margin || "0"};
  background: ${(props) => props.background || "transparent"};
`;

// ===== COMPONENTES DE TEXTO =====

export const Heading = styled.h1<{
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  align?: string;
  weight?: keyof typeof theme.typography.fontWeight;
}>`
  margin: 0;
  color: ${(props) => props.color || theme.colors.text.primary};
  text-align: ${(props) => props.align || "left"};
  font-weight: ${(props) =>
    theme.typography.fontWeight[props.weight || "semibold"]};
  line-height: ${theme.typography.lineHeight.tight};

  ${(props) => {
    switch (props.level) {
      case 1:
        return `font-size: ${theme.typography.fontSize["4xl"]};`;
      case 2:
        return `font-size: ${theme.typography.fontSize["3xl"]};`;
      case 3:
        return `font-size: ${theme.typography.fontSize["2xl"]};`;
      case 4:
        return `font-size: ${theme.typography.fontSize.xl};`;
      case 5:
        return `font-size: ${theme.typography.fontSize.lg};`;
      case 6:
        return `font-size: ${theme.typography.fontSize.base};`;
      default:
        return `font-size: ${theme.typography.fontSize["2xl"]};`;
    }
  }}

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${(props) => {
      switch (props.level) {
        case 1:
          return theme.typography.fontSize["3xl"];
        case 2:
          return theme.typography.fontSize["2xl"];
        case 3:
          return theme.typography.fontSize.xl;
        case 4:
          return theme.typography.fontSize.lg;
        case 5:
          return theme.typography.fontSize.base;
        case 6:
          return theme.typography.fontSize.sm;
        default:
          return theme.typography.fontSize.xl;
      }
    }};
  }
`;

export const Text = styled.p<{
  size?: keyof typeof theme.typography.fontSize;
  color?: string;
  weight?: keyof typeof theme.typography.fontWeight;
  align?: string;
  lineHeight?: keyof typeof theme.typography.lineHeight;
}>`
  margin: 0;
  font-size: ${(props) => theme.typography.fontSize[props.size || "base"]};
  color: ${(props) => props.color || theme.colors.text.primary};
  font-weight: ${(props) =>
    theme.typography.fontWeight[props.weight || "normal"]};
  text-align: ${(props) => props.align || "left"};
  line-height: ${(props) =>
    theme.typography.lineHeight[props.lineHeight || "normal"]};
`;

// ===== COMPONENTES DE LAYOUT =====

export const Card = styled.div<{
  padding?: string;
  margin?: string;
  shadow?: keyof typeof theme.shadows;
  border?: string;
  borderRadius?: keyof typeof theme.borderRadius;
  background?: string;
}>`
  background: ${(props) => props.background || theme.colors.background.primary};
  border: ${(props) =>
    props.border || `1px solid ${theme.colors.border.light}`};
  border-radius: ${(props) => theme.borderRadius[props.borderRadius || "lg"]};
  padding: ${(props) => props.padding || theme.spacing[6]};
  margin: ${(props) => props.margin || "0"};
  box-shadow: ${(props) => theme.shadows[props.shadow || "base"]};
  transition: box-shadow ${theme.transitions.duration.normal}
    ${theme.transitions.easing.ease};

  &:hover {
    box-shadow: ${(props) =>
      props.shadow ? theme.shadows.lg : theme.shadows.base};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${(props) => props.padding || theme.spacing[4]};
  }
`;

export const Divider = styled.hr<{
  color?: string;
  thickness?: string;
  margin?: string;
}>`
  border: none;
  height: ${(props) => props.thickness || "1px"};
  background: ${(props) => props.color || theme.colors.border.light};
  margin: ${(props) => props.margin || `${theme.spacing[4]} 0`};
`;

// ===== COMPONENTES DE FEEDBACK =====

export const Badge = styled.span<{
  variant?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
  size?: "sm" | "md" | "lg";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.full};
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.025em;

  ${(props) => {
    const variant = props.variant || "primary";
    const size = props.size || "md";

    const variants = {
      primary: {
        background: theme.colors.primary[500],
        color: theme.colors.text.inverse,
      },
      secondary: {
        background: theme.colors.secondary[500],
        color: theme.colors.text.inverse,
      },
      success: {
        background: theme.colors.success[500],
        color: theme.colors.text.inverse,
      },
      error: {
        background: theme.colors.error[500],
        color: theme.colors.text.inverse,
      },
      warning: {
        background: theme.colors.warning[500],
        color: theme.colors.text.primary,
      },
      info: {
        background: theme.colors.info[500],
        color: theme.colors.text.inverse,
      },
    };

    const sizes = {
      sm: {
        padding: `${theme.spacing[1]} ${theme.spacing[2]}`,
        fontSize: theme.typography.fontSize.xs,
      },
      md: {
        padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
        fontSize: theme.typography.fontSize.sm,
      },
      lg: {
        padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
        fontSize: theme.typography.fontSize.base,
      },
    };

    return `
      background: ${variants[variant].background};
      color: ${variants[variant].color};
      padding: ${sizes[size].padding};
      font-size: ${sizes[size].fontSize};
    `;
  }}
`;

// ===== UTILITÁRIOS =====

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const focusVisible = `
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

export const srOnly = `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
