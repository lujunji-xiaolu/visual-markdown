import * as React from "react";
import { styled } from "@mui/material/styles";

const TabsRoot = styled("div", {
  name: "WinUITabs",
  slot: "Root",
})({
  display: "flex",
});

interface TabsProps {
  children?: React.ReactNode;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { children } = props;

  return <TabsRoot ref={ref}>{children}</TabsRoot>;
});

export default Tabs;
