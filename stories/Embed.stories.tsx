import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Embed from "@/components/Embed";

export default {
  title: "components/Embed",
  component: Embed,
} as ComponentMeta<typeof Embed>;

const Template: ComponentStory<typeof Embed> = (args) => <Embed {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://www.youtube.com/embed/hdWyYn0E4Ys",
};
