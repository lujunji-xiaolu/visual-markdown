import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@/features/theme";
import Button from "../button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "WinUI/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ThemeProvider mode="light">
          <Button {...args} />
        </ThemeProvider>
      </Grid>
      <Grid item xs={6}>
        <ThemeProvider mode="dark">
          <Button {...args} />
        </ThemeProvider>
      </Grid>
    </Grid>
  </>
);

export const Contained = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Contained.args = {
  variant: "accent",
  disabled: true,
  children: "Text",
};
