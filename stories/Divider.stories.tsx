import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Divider } from "@/components/Divider";

export default {
  title: "components/Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Default = Template.bind({});
Default.args;
