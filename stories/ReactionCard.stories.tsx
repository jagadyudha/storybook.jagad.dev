import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ReactionCard from "@/components/ReactionCard";

export default {
  title: "components/ReactionCard",
  component: ReactionCard,
} as ComponentMeta<typeof ReactionCard>;

const Template: ComponentStory<typeof ReactionCard> = (args) => (
  <ReactionCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  count: 17,
  isActive: false,
};
