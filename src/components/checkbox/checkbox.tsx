import * as React from "react";
import { styled } from "@mui/material/styles";

const CheckboxRoot = styled("input", {
  name: "Checkbox",
  slot: "Root",
})(({ theme }) => ({
  width: 20,
  height: 20,
}));

interface CheckboxProps {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  return <CheckboxRoot type="checkbox" ref={ref} />;
});

export default Checkbox;
