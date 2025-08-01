import {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  zIndex,
  transitions,
} from "./tokens";

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  zIndex,
  transitions,
} as const;

export type Theme = typeof theme;

export type ColorToken = keyof typeof colors;
export type SpacingToken = keyof typeof spacing;
export type BorderRadiusToken = keyof typeof borderRadius;
export type ShadowToken = keyof typeof shadows;
export type BreakpointToken = keyof typeof breakpoints;
export type FontSizeToken = keyof typeof typography.fontSize;
export type FontWeightToken = keyof typeof typography.fontWeight;
export type LineHeightToken = keyof typeof typography.lineHeight;
export type TransitionDurationToken = keyof typeof transitions.duration;
export type TransitionEasingToken = keyof typeof transitions.easing;

export const getColor = (color: string) => {
  const [category, shade] = color.split(".");
  const colorCategory = colors[category as keyof typeof colors];
  if (colorCategory && typeof colorCategory === "object") {
    return (colorCategory as any)[shade] || color;
  }
  return color;
};

export const getSpacing = (space: keyof typeof spacing) => spacing[space];
export const getBorderRadius = (radius: keyof typeof borderRadius) =>
  borderRadius[radius];
export const getShadow = (shadow: keyof typeof shadows) => shadows[shadow];
export const getFontSize = (size: keyof typeof typography.fontSize) =>
  typography.fontSize[size];
export const getFontWeight = (weight: keyof typeof typography.fontWeight) =>
  typography.fontWeight[weight];
export const getLineHeight = (height: keyof typeof typography.lineHeight) =>
  typography.lineHeight[height];
