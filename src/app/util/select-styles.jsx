export const colorStyles = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: "transparent",
    border: state.isFocused ? 1 : 0,
    boxShadow: state.isFocused ? "0 0 0 2px #25E78A " : "",
    borderRadius: "0.5rem",
  }),
  input: (styles) => ({
    ...styles,
    color: "#E2E2E2",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "#E2E2E2",
    textTransform: "uppercase",
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "#272727",
  }),
  option: (styles) => ({
    ...styles,
    color: "#737373",
    backgroundColor: "#272727",
    textTransform: "uppercase",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
};
