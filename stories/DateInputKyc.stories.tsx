import React from "react";
import DateInputKyc, { DateInputKycProps } from "../components/DateInputKyc";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/DateInputKyc",
  component: DateInputKyc,
  argTypes: {},
} as ComponentMeta<typeof DateInputKyc>;

const Template: ComponentStory<typeof DateInputKyc> = (
  args: DateInputKycProps
) => <DateInputKyc {...args} />;

export const Main = Template.bind({});
 