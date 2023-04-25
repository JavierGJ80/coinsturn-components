import React from "react";
import LineGraph, { LineGraphProps } from "../components/LineGraph";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/LineGraph",
  component: LineGraph,
  argTypes: {},
} as ComponentMeta<typeof LineGraph>;

const Template: ComponentStory<typeof LineGraph> = (
  args: LineGraphProps
) => <LineGraph {...args} />;

export const Main = Template.bind({});