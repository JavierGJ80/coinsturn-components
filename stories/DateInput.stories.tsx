import React from "react";
import DateInput, { DateInputProps } from "../components/DateInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/DateInput",
  component: DateInput,
  argTypes: {},
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (
  args: DateInputProps
) => <DateInput {...args} />;

export const Main = Template.bind({});
 