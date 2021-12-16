// Breakpoints (Similar to standard but with additional breakpoint for i5)
// Consider changing this to follow bootstrap standard? (use minimum instead of maximum, ie: xs = 0px instead of 370px)
export const breakpoints = {
  xs: "370px", // Small mobile (i5 etc)
  sm: "576px", // Normal mobile
  md: "768px", // Regular Tablet
  lg: "992px", // Small desktop / notebook / HD tablet
  xl: "1200px", // Normal Desktop
  xxl: "1400px", // Power users
};

// Breakpoints formatted as css rules
export const breakpointRules = {
  xs: `@media screen and (min-width: ${breakpoints.xs})`,
  sm: `@media screen and (min-width: ${breakpoints.sm})`,
  md: `@media screen and (min-width: ${breakpoints.md})`,
  lg: `@media screen and (min-width: ${breakpoints.lg})`,
  xl: `@media screen and (min-width: ${breakpoints.xl})`,
  xxl: `@media screen and (min-width: ${breakpoints.xxl})`,
};

// Border Radius
export const radius = {
  subtle: "6px", // Randomly picked, feel free to adjust
  default: "18px", // Randomly picked, feel free to adjust
  heavy: "36px", // Randomly picked, feel free to adjust
  circle: "50%", // Randomly picked, feel free to adjust
};

// Shadows
export const shadows = {
  sm: "0 .125rem .25rem rgba(0, 0, 0, .075)", // Randomly picked, feel free to adjust
  md: "0 .5rem 1rem rgba(0, 0, 0, .15)", // Randomly picked, feel free to adjust
  lg: "0 1rem 3rem rgba(0, 0, 0, .175)", // Randomly picked, feel free to adjust
  focus: "0px 0px 0px 1px #DD4949, 0px 0px 0px 4px rgba(220, 70, 70, 0.55)", // Randomly picked, feel free to adjust
  inset: "inset 0px 1px 1px -1px rgba(112, 82, 82, 0.09)", // Randomly picked, feel free to adjust
};

// Z-Index (Following bootstrap standard)
export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};

export const samples = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "light",
  "dark",
];