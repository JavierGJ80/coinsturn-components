import React from "react";
import Form, { FormProps } from "../components/Form";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Form",
  component: Form,
  argTypes: {},
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (
  args: FormProps
) => <Form {...args} />;

export const Main = Template.bind({});
 