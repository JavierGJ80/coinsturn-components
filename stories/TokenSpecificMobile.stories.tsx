import React from "react";
import TokenSpecificMobile, { TokenSpecificMobileProps } from "../components/TokenSpecificMobile";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/TokenSpecificMobile",
  component: TokenSpecificMobile,
  argTypes: {},
} as ComponentMeta<typeof TokenSpecificMobile>;

const Template: ComponentStory<typeof TokenSpecificMobile> = (
  args: TokenSpecificMobileProps
) => <TokenSpecificMobile {...args} />;

export const Main = Template.bind({});
 