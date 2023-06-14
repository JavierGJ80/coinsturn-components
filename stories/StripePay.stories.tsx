import React from "react";
import StripePay, { StripePayProps } from "../components/StripePay";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/StripePay",
  component: StripePay,
  argTypes: {},
} as ComponentMeta<typeof StripePay>;

const Template: ComponentStory<typeof StripePay> = (
  args: StripePayProps
) => <StripePay {...args} />;

export const Main = Template.bind({});
 