import React from "react";
import TokenSpecific, { TokenSpecificProps } from "../components/TokenSpecific";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/TokenSpecific",
  component: TokenSpecific,
  argTypes: {},
} as ComponentMeta<typeof TokenSpecific>;

const Template: ComponentStory<typeof TokenSpecific> = (
  args: TokenSpecificProps
) => <TokenSpecific {...args} />;

export const Main = Template.bind({});

Main.args = {
  resPartner : [{ coinsturn_theme: "light", coinsturn_language: "en"}]
}
 