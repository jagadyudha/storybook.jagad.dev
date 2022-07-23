import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "@/components/Button";

export default {
  title: "components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
  variants: "primary",
};

export const PrimaryButon = Template.bind({});
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

export const TagStackButton = Template.bind({});
TagStackButton.args = {
  label: "firebaseeee",
  variants: "stack",
};
