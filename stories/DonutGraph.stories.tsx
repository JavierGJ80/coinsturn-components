import React from "react";
import DonutGraph, { DonutGraphProps } from "../components/DonutGraph";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/DonutGraph",
  component: DonutGraph,
  argTypes: {},
} as ComponentMeta<typeof DonutGraph>;

const Template: ComponentStory<typeof DonutGraph> = (
  args: DonutGraphProps
) => <DonutGraph {...args} />;

export const Main = Template.bind({});
 