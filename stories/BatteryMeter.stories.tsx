import React from "react";
import BatteryMeter, { BatteryMeterProps } from "../components/BatteryMeter";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/BatteryMeter",
  component: BatteryMeter,
  argTypes: {},
} as ComponentMeta<typeof BatteryMeter>;

const Template: ComponentStory<typeof BatteryMeter> = (
  args: BatteryMeterProps
) => <BatteryMeter {...args} />;

export const Main = Template.bind({});
 