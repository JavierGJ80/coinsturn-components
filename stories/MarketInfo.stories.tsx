import React from "react";
import MarketInfo, { MarketInfoProps } from "../components/MarketInfo";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/MarketInfo",
  component: MarketInfo,
  argTypes: {},
  args : {
    resPartner : [{ coinsturn_theme: "light", coinsturn_language: "es"}]
  }
} as ComponentMeta<typeof MarketInfo>;

const Template: ComponentStory<typeof MarketInfo> = (
  args: MarketInfoProps
) => <MarketInfo {...args} />;

export const Main = Template.bind({});
 