import * as React from "react";
import { styled } from "@mui/material/styles";

const TabRoot = styled("div", {
  name: "Tab",
  slot: "Root",
})({
  width: 240,
  height: 32,
});

interface TabProps {
  children?: React.ReactNode;
}

const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const { children } = props;

  return <TabRoot ref={ref}>{children}</TabRoot>;
});

export default Tab;
