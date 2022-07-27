import * as React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import generateUtilityClasses from "@mui/base/generateUtilityClasses";

const buttonClasses = generateUtilityClasses("WinUIButton", ["disabled"]);

interface OwnerState {
  variant: "accent" | "standard";
}

const ButtonRoot = styled(ButtonBase, {
  name: "WinUIButton",
  slot: "Root",
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  padding: "6px 47.5px",
  borderRadius: theme.shape.borderRadius,
  ...theme.typography.body2,
  transition: theme.transitions.create(
    ["background-color", "box-shadow", "border-color", "color"],
    {
      duration: theme.transitions.duration.short,
    }
  ),
  "&:hover": {
    ...(ownerState.variant === "accent" && {
      backgroundColor: theme.palette.fill.accent.secondary,
    }),
  },
  "&:active": {
    ...(ownerState.variant === "accent" && {
      color: theme.palette.textOnAccent.secondary,
      backgroundColor: theme.palette.fill.accent.tertiary,
    }),
  },
  [`&.${buttonClasses.disabled}`]: {
    ...(ownerState.variant === "accent" && {
      color: theme.palette.textOnAccent.disabled,
      backgroundColor: theme.palette.fill.accent.disabled,
    }),
  },
  ...(ownerState.variant === "accent" && {
    color: theme.palette.textOnAccent.primary,
    backgroundColor: theme.palette.fill.accent.default,
  }),
}));

interface ButtonProps {
  variant?: "accent" | "standard";
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant = "accent", disabled = false, children } = props;

    const ownerState: OwnerState = { variant };

    return (
      <ButtonRoot
        ownerState={ownerState}
        disabled={disabled}
        disableRipple
        ref={ref}
      >
        {children}
      </ButtonRoot>
    );
  }
);

export default Button;
