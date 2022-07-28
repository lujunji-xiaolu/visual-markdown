import * as React from "react";
import { styled, SxProps, Theme } from "@mui/material/styles";
import noiseAsset from "./NoiseAsset_256.png";

const FlyoutRoot = styled("div", {
  name: "Flyout",
  slot: "Root",
})(({ theme }) => ({
  border: "1px solid",
  borderRadius: 8,
  backdropFilter: "blur(60px)",
  ...(theme.palette.mode === "light" && {
    borderColor: "rgba(0, 0, 0, 0.0578)",
    background: `url(${noiseAsset}), rgba(252, 252, 252, 0.85)`,
    backgroundBlendMode: "normal, luminosity",
  }),
  ...(theme.palette.mode === "dark" && {
    borderColor: "rgba(0, 0, 0, 0.2)",
    background: `url(${noiseAsset}), linear-gradient(0deg, rgba(44, 44, 44, 0.15), rgba(44, 44, 44, 0.15)), rgba(44, 44, 44, 0.96)`,
    backgroundBlendMode: "normal, color, luminosity",
  }),
}));

interface FlyoutProps {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}

const Flyout = React.forwardRef<HTMLDivElement, FlyoutProps>((props, ref) => {
  const { children, ...other } = props;

  return (
    <FlyoutRoot ref={ref} {...other}>
      {children}
    </FlyoutRoot>
  );
});

export default Flyout;
