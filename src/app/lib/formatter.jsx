export const formatter = (number, style, notation, dec) => {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    notation,
    style,
    maximumFractionDigits: dec,
  }).format(number);
};
