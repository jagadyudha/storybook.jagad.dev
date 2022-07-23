import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ViewCount from "@/components/ViewCount";

export default {
  title: "components/ViewCount",
  component: ViewCount,
} as ComponentMeta<typeof ViewCount>;

const Template: ComponentStory<typeof ViewCount> = (args) => (
  <ViewCount {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 12400,
};

export const Featured = Template.bind({});
Featured.args = {
  children: 12400,
  variants: "featured",
};
