import styled from "styled-components";
import { colors, typography, spacing, borderRadius, shadows } from "./tokens";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${spacing[6]};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 ${spacing[4]};
  }
`;

export const Flex = styled.div<{
  direction?: "row" | "column";
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
  align?: "start" | "center" | "end" | "stretch";
  gap?: keyof typeof spacing;
  wrap?: "wrap" | "nowrap";
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "start"};
  align-items: ${(props) => props.align || "stretch"};
  gap: ${(props) => spacing[props.gap || 0]};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
`;

export const Grid = styled.div<{
  columns?: number;
  gap?: keyof typeof spacing;
}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 1}, 1fr);
  gap: ${(props) => spacing[props.gap || 0]};
`;

export const Card = styled.div`
  background: ${colors.background.primary};
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.base};
  padding: ${spacing[6]};
  border: 1px solid ${colors.border.light};
`;

export const Button = styled.button<{
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${borderRadius.md};
  font-family: ${typography.fontFamily.sans};
  font-weight: ${typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  gap: ${spacing[2]};

  ${(props) => {
    switch (props.size) {
      case "sm":
        return `
          padding: ${spacing[2]} ${spacing[3]};
          font-size: ${typography.fontSize.sm};
        `;
      case "lg":
        return `
          padding: ${spacing[4]} ${spacing[6]};
          font-size: ${typography.fontSize.lg};
        `;
      default:
        return `
          padding: ${spacing[3]} ${spacing[4]};
          font-size: ${typography.fontSize.base};
        `;
    }
  }}

  ${(props) => {
    switch (props.variant) {
      case "secondary":
        return `
          background: ${colors.secondary[100]};
          color: ${colors.secondary[700]};
          &:hover {
            background: ${colors.secondary[200]};
          }
        `;
      case "danger":
        return `
          background: ${colors.error[500]};
          color: ${colors.text.inverse};
          &:hover {
            background: ${colors.error[600]};
          }
        `;
      case "ghost":
        return `
          background: transparent;
          color: ${colors.text.secondary};
          &:hover {
            background: ${colors.neutral[100]};
          }
        `;
      default:
        return `
          background: ${colors.primary[500]};
          color: ${colors.text.inverse};
          &:hover {
            background: ${colors.primary[600]};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: ${spacing[3]} ${spacing[4]};
  border: 1px solid ${colors.border.medium};
  border-radius: ${borderRadius.md};
  font-family: ${typography.fontFamily.sans};
  font-size: ${typography.fontSize.base};
  background: ${colors.background.primary};
  color: ${colors.text.primary};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.primary[500]};
    box-shadow: 0 0 0 3px ${colors.primary[100]}40;
  }

  &::placeholder {
    color: ${colors.text.tertiary};
  }

  &:disabled {
    background: ${colors.neutral[100]};
    cursor: not-allowed;
  }
`;

export const Text = styled.span<{
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "caption";
  color?: keyof typeof colors.text;
  weight?: keyof typeof typography.fontWeight;
}>`
  font-family: ${typography.fontFamily.sans};
  color: ${(props) => colors.text[props.color || "primary"]};
  font-weight: ${(props) => typography.fontWeight[props.weight || "normal"]};

  ${(props) => {
    switch (props.variant) {
      case "h1":
        return `font-size: ${typography.fontSize["4xl"]}; line-height: ${typography.lineHeight.tight};`;
      case "h2":
        return `font-size: ${typography.fontSize["3xl"]}; line-height: ${typography.lineHeight.tight};`;
      case "h3":
        return `font-size: ${typography.fontSize["2xl"]}; line-height: ${typography.lineHeight.snug};`;
      case "h4":
        return `font-size: ${typography.fontSize.xl}; line-height: ${typography.lineHeight.snug};`;
      case "h5":
        return `font-size: ${typography.fontSize.lg}; line-height: ${typography.lineHeight.normal};`;
      case "h6":
        return `font-size: ${typography.fontSize.base}; line-height: ${typography.lineHeight.normal};`;
      case "caption":
        return `font-size: ${typography.fontSize.sm}; line-height: ${typography.lineHeight.normal};`;
      default:
        return `font-size: ${typography.fontSize.base}; line-height: ${typography.lineHeight.normal};`;
    }
  }}
`;

export const Heading = styled(Text).attrs({ as: "h1" })``;
export const Subheading = styled(Text).attrs({ as: "h2" })``;
export const Title = styled(Text).attrs({ as: "h3" })``;
export const Subtitle = styled(Text).attrs({ as: "h4" })``;
export const Body = styled(Text).attrs({ as: "p" })``;
export const Caption = styled(Text).attrs({ as: "span" })``;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: ${colors.border.light};
  margin: ${spacing[4]} 0;
`;

export const Spacer = styled.div<{
  size?: keyof typeof spacing;
  axis?: "horizontal" | "vertical";
}>`
  ${(props) => {
    if (props.axis === "horizontal") {
      return `width: ${spacing[props.size || 4]};`;
    }
    return `height: ${spacing[props.size || 4]};`;
  }}
`;

export const Badge = styled.span<{
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
}>`
  display: inline-flex;
  align-items: center;
  padding: ${spacing[1]} ${spacing[2]};
  border-radius: ${borderRadius.full};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  line-height: 1;

  ${(props) => {
    switch (props.variant) {
      case "secondary":
        return `
          background: ${colors.secondary[100]};
          color: ${colors.secondary[700]};
        `;
      case "success":
        return `
          background: ${colors.success[100]};
          color: ${colors.success[700]};
        `;
      case "warning":
        return `
          background: ${colors.warning[100]};
          color: ${colors.warning[700]};
        `;
      case "error":
        return `
          background: ${colors.error[100]};
          color: ${colors.error[700]};
        `;
      default:
        return `
          background: ${colors.primary[100]};
          color: ${colors.primary[700]};
        `;
    }
  }}
`;

export const Alert = styled.div<{
  variant?: "info" | "success" | "warning" | "error";
}>`
  padding: ${spacing[4]};
  border-radius: ${borderRadius.md};
  border-left: 4px solid;

  ${(props) => {
    switch (props.variant) {
      case "success":
        return `
          background: ${colors.success[50]};
          border-left-color: ${colors.success[500]};
          color: ${colors.success[700]};
        `;
      case "warning":
        return `
          background: ${colors.warning[50]};
          border-left-color: ${colors.warning[500]};
          color: ${colors.warning[700]};
        `;
      case "error":
        return `
          background: ${colors.error[50]};
          border-left-color: ${colors.error[500]};
          color: ${colors.error[700]};
        `;
      default:
        return `
          background: ${colors.info[50]};
          border-left-color: ${colors.info[500]};
          color: ${colors.info[700]};
        `;
    }
  }}
`;

export const Skeleton = styled.div<{
  width?: string;
  height?: string;
}>`
  background: ${colors.neutral[200]};
  border-radius: ${borderRadius.md};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "1rem"};
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

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

export const FocusVisible = styled.div`
  &:focus-visible {
    outline: 2px solid ${colors.primary[500]};
    outline-offset: 2px;
  }
`;
