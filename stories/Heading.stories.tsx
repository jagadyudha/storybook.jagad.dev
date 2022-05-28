import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading } from "./Heading";

export default {
  title: "components/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Default heading",
  size: "default",
};

export const BaseHeading = Template.bind({});
BaseHeading.args = {
  label: "Base heading",
  size: "base",
};

export const xsHeading = Template.bind({});
xsHeading.args = {
  label: "xs heading",
  size: "xs",
};
