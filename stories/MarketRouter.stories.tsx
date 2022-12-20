import React from "react";
import MarketRouter, { MarketRouterProps } from "../components/MarketRouter";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/MarketRouter",
  component: MarketRouter,
  argTypes: {},
} as ComponentMeta<typeof MarketRouter>;

const Template: ComponentStory<typeof MarketRouter> = (
  args: MarketRouterProps
) => <MarketRouter {...args} />;

export const Main = Template.bind({});
 