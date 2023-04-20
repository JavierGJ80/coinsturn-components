import React from "react";
import BarGraph, { BarGraphProps } from "../components/BarGraph";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/BarGraph",
  component: BarGraph,
  argTypes: {},
} as ComponentMeta<typeof BarGraph>;

const Template: ComponentStory<typeof BarGraph> = (
  args: BarGraphProps
) => <BarGraph {...args} />;


export const Main = Template.bind({});
 