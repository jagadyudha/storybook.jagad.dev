import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Image from "@/components/Image";

export default {
  title: "components/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://res.cloudinary.com/dlpb6j88q/image/upload/c_limit%2Cf_auto%2Cfl_progressive%2Cq_75%2Cw_800//jagad.dev/posts/when-should-you-use-usestate-vs-useref/usestate_vs_useref_meme_ajj5md.jpg",
  width: 500,
  height: 700,
};
