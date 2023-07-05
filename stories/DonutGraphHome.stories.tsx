import React from "react";
import DonutGraphHome, { DonutGraphHomeProps } from "../components/DonutGraphHome";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/DonutGraphHome",
  component: DonutGraphHome,
  argTypes: {},
} as ComponentMeta<typeof DonutGraphHome>;

const Template: ComponentStory<typeof DonutGraphHome> = (
  args: DonutGraphHomeProps
) => <DonutGraphHome {...args} />;

export const Main = Template.bind({});