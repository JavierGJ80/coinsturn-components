import React from "react";
import ContractPerformance, { ContractPerformanceProps } from "../components/ContractPerformance";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/ContractPerformance",
  component: ContractPerformance,
  argTypes: {},
} as ComponentMeta<typeof ContractPerformance>;

const Template: ComponentStory<typeof ContractPerformance> = (
  args: ContractPerformanceProps
) => <ContractPerformance {...args} />;

export const Main = Template.bind({});
 