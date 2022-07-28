import * as React from "react";
import { styled } from "@mui/material/styles";

const icons = {
  ChevronDownMed: '"\\e972"',
};

const SegoeFluentIconRoot = styled("span", {
  name: "SegoeFluentIcon",
  slot: "Root",
})({
  fontFamily: "Segoe Fluent Icons",
});

interface SegoeFluentIconProps {
  name: keyof typeof icons;
  size?: number;
}

const SegoeFluentIcon = React.forwardRef<HTMLSpanElement, SegoeFluentIconProps>(
  (props, ref) => {
    const { name, size = 12 } = props;

    const content = icons[name] ?? "";

    return (
      <SegoeFluentIconRoot
        sx={{
          fontSize: size,
          "&:before": {
            content,
          },
        }}
        ref={ref}
      />
    );
  }
);

export default SegoeFluentIcon;
