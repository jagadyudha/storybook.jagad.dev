import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NewsLetter from "@/components/NewsLetter";

export default {
  title: "components/NewsLetter",
  component: NewsLetter,
} as ComponentMeta<typeof NewsLetter>;

const Template: ComponentStory<typeof NewsLetter> = (args) => <NewsLetter />;

export const Default = Template.bind({});
Default.args;
