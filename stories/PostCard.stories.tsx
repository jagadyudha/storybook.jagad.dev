import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PostCard } from "@/components/PostCard";

export default {
  title: "components/PostCard",
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  slug: "dynamic-open-graph-cloudinary",
  title: "Create Dynamic Open Graph Images with Cloudinary",
  description:
    "Make dynamic Open Graph images with the help of Cloudinary URL transformations",
  date: "2022-01-01",
  tags: ["cloudinary", "opengraph"],
  isRead: true,
};

export const Featured = Template.bind({});
Featured.args = {
  variants: "featured",
  slug: "dynamic-open-graph-cloudinary",
  title: "Create Dynamic Open Graph Images with Cloudinary",
  description:
    "Make dynamic Open Graph images with the help of Cloudinary URL transformations",
  date: "2022-01-01",
};
