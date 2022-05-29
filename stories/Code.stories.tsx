import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Code } from "@/components/Code";

export default {
  title: "components/Code",
  component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: `
  import React, { memo } from 'react';
  import twemoji from 'twemoji';
  
  export interface Props {
    emoji: string;
  }
  
  const Twemoji: React.FC<Props> = ({ emoji }) => (
    <span
      dangerouslySetInnerHTML={{
        __html: twemoji.parse(emoji, {
          folder: 'svg',
          ext: '.svg',
        }),
      }}
    />
  );
  
  export default memo(Twemoji);`,
};
