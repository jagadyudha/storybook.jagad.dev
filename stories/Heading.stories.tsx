import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading } from "@/components/Heading";

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

export const xsHeading = Template.bind({});
xsHeading.args = {
  label: "xs heading",
  size: "xs",
};

export const smHeading = Template.bind({});
smHeading.args = {
  label: "sm heading",
  size: "sm",
};

export const BaseHeading = Template.bind({});
BaseHeading.args = {
  label: "Base heading",
  size: "base",
};

export const lgHeading = Template.bind({});
lgHeading.args = {
  label: "lg heading",
  size: "lg",
};

export const xlHeading = Template.bind({});
xlHeading.args = {
  label: "xl heading",
  size: "xl",
};

export const _2xlHeading = Template.bind({});
_2xlHeading.args = {
  label: "2xl heading",
  size: "2xl",
};

export const _3xlHeading = Template.bind({});
_3xlHeading.args = {
  label: "3xl heading",
  size: "3xl",
};

export const _4xlHeading = Template.bind({});
_4xlHeading.args = {
  label: "4xl heading",
  size: "4xl",
};

export const _5xlHeading = Template.bind({});
_5xlHeading.args = {
  label: "5xl heading",
  size: "5xl",
};

export const _6xlHeading = Template.bind({});
_6xlHeading.args = {
  label: "6xl heading",
  size: "6xl",
};
