import * as React from "react";
import { styled, SxProps, Theme } from "@mui/material/styles";

const CardRoot = styled("div", {
  name: "WinUICard",
  slot: "Root",
})(({ theme }) => ({
  border: "1px solid",
  borderRadius: 8,
  ...(theme.palette.mode === "light" && {
    borderColor: "rgba(0, 0, 0, 0.0578)",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.04)",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  }),
  ...(theme.palette.mode === "dark" && {
    borderColor: "rgba(0, 0, 0, 0.1)",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.13)",
    backgroundColor: "rgba(255, 255, 255, 0.0512)",
  }),
}));

interface CardProps {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { children, ...other } = props;

  return (
    <CardRoot ref={ref} {...other}>
      {children}
    </CardRoot>
  );
});

export default Card;
