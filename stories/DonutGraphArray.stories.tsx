import React from "react";
import DonutGraphArray, { DonutGraphArrayProps } from "../components/DonutGraphArray";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/DonutGraphArray",
  component: DonutGraphArray,
  argTypes: {},
} as ComponentMeta<typeof DonutGraphArray>;

const Template: ComponentStory<typeof DonutGraphArray> = (
  args: DonutGraphArrayProps
) => <DonutGraphArray {...args} />;

export const Main = Template.bind({});
 