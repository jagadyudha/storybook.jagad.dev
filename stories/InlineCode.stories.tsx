import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InlineCode } from "@/components/InlineCode";

export default {
  title: "components/InlineCode",
  component: InlineCode,
} as ComponentMeta<typeof InlineCode>;

const Template: ComponentStory<typeof InlineCode> = (args) => (
  <InlineCode {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "getStaticProps",
};
