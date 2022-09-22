import React from "react";
import BalancePerformance, { BalancePerformanceProps } from "../components/BalancePerformance";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/BalancePerformance",
  component: BalancePerformance,
  argTypes: {},
} as ComponentMeta<typeof BalancePerformance>;

const Template: ComponentStory<typeof BalancePerformance> = (
  args: BalancePerformanceProps
) => <BalancePerformance {...args} />;

export const Main = Template.bind({});
 