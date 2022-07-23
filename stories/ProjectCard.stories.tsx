import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProjectCard } from "@/components/ProjectCard";

export default {
  title: "components/ProjectCard",
  component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (args) => (
  <ProjectCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "CitizenApp - Sidoarjo Smart City",
  slug: "citizenapp",
  description:
    "Mobile app that allows citizens of Sidoarjo to report damage to public facilities by simply scanning a QR code.",
  stack: ["react native", "firebase", "mapbox"],
};
