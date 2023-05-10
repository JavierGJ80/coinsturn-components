import React from "react";
import MarketInfoIndex, { MarketInfoIndexProps } from "../components/MarketInfoIndex";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/MarketInfoIndex",
  component: MarketInfoIndex,
  argTypes: {},
} as ComponentMeta<typeof MarketInfoIndex>;

const Template: ComponentStory<typeof MarketInfoIndex> = (
  args: MarketInfoIndexProps
) => <MarketInfoIndex {...args} />;

export const Main = Template.bind({});
 