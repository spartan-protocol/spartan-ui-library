// Sparta Branding (Place all colors here that *dont* change based on light/dark theme)
const colorsSparta = {
  // Primary & shades-of
  primary: "#FB2715", // This is the SPARTAN-RED (Important for branding)
  bright: "#fe584a", // Brighter shade of SPARTAN-RED (Can be changed, but keep within range of SPARTAN-RED)
  dark: "#ca2213", // Darker shade of SPARTAN-RED (Can be changed, but keep within range of SPARTAN-RED)
  // Others
  secondary: "#6d15fb", // Randomly picked, feel free to change to suit theme/taste
  success: "#31d038",   // Randomly picked, feel free to change to suit theme/taste
  danger: "#ED4B9E",   // Randomly picked, feel free to change to suit theme/taste
  warning: "#ffd037",   // Randomly picked, feel free to change to suit theme/taste
  info: "",   // Randomly picked, feel free to change to suit theme/taste
  light: "",   // Randomly picked, feel free to change to suit theme/taste
  dark: "",   // Randomly picked, feel free to change to suit theme/taste
  card: "rgba(64, 54, 54, 0.5)", // Card bg (semi-transparent overlay style inheriting the underlying bg gradient)
};

// Other Branding
const colorsBrands = {
  binance: "#F0B90B", // Binance yellow
  bitcoin: "#f2a900", // Bitcoin orange
};

// Light (Place *only* light theme specific colors here. Colors that dont change between light/dark can go in *colorsSparta*)
export const colorsLight = {
  ...colorsSparta, // Const SPARTA branding
  ...colorsBrands, // Const external branding
  bg: "#F8F8F8", // Randomly picked, feel free to change to suit theme/taste
  bgDisabled: "#EEEEEE", // Randomly picked, feel free to change to suit theme/taste
  fg: "#191326", // Randomly picked, feel free to change to suit theme/taste
  form: "#E6D5D5", // Randomly picked, feel free to change to suit theme/taste
  text: "#7A2A2A", // Randomly picked, feel free to change to suit theme/taste
  textDisabled: "#C3BABA", // Randomly picked, feel free to change to suit theme/taste
  textAlt: "#BA7D7D", // Randomly picked, feel free to change to suit theme/taste
  border: "#EBE9E9", // Randomly picked, feel free to change to suit theme/taste
};

// Dark (Place *only* dark theme specific colors here. Colors that dont change between light/dark can go in *colorsSparta*)
export const colorsDark = {
  ...colorsSparta, // Const SPARTA branding
  ...colorsBrands, // Const external branding
  bg: "#918484", // Randomly picked, feel free to change to suit theme/taste
  bgDisabled: "#B2A7A7", // Randomly picked, feel free to change to suit theme/taste
  fg: "#FFFFFF", // Randomly picked, feel free to change to suit theme/taste
  form: "#5F4444", // Randomly picked, feel free to change to suit theme/taste
  text: "#F4DADA", // Randomly picked, feel free to change to suit theme/taste
  textDisabled: "#766868", // Randomly picked, feel free to change to suit theme/taste
  textAlt: "#CF8686", // Randomly picked, feel free to change to suit theme/taste
  border: "#675050", // Randomly picked, feel free to change to suit theme/taste
};

// Gradients
export const gradients = {
  linear: {
    bg: "linear-gradient(178deg, rgba(53, 8, 8, 0), rgba(10, 0, 0, 0.9)), linear-gradient(325deg, rgba(255, 153, 153, 0.2), rgba(255, 180, 180, 0.08))", // Randomly picked, feel free to change to suit theme/taste
    primary: "",
    secondary: "",
  },
  radial: {
    bg: "",
    primary: "",
    secondary: "",
  },
};
