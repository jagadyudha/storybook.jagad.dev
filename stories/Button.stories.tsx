import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Default Button",
  variants: "primary",
};

export const PrimaryButon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryButon.args = {
  label: "Primary Button",
  variants: "primary",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  label: "Secondary Button",
  variants: "secondary",
};

export const TagButton = Template.bind({});
TagButton.args = {
  label: "#tagbutton",
  variants: "tag",
};
