import React from "react";
import { WYSIWYG } from "../components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/WYSIWYG",
  component: WYSIWYG,
  argTypes: {},
} as ComponentMeta<typeof WYSIWYG>;

const Template: ComponentStory<typeof WYSIWYG> = (args: any) => {
  const obtainHTML = value => console.log(value);
  return (
    <WYSIWYG {...args} name='Test' valueSaved={'<p><span style="color: rgb(0,0,0);font-size: 32px;font-family: Times;">asdsdasdssda</span></p>'} onChange={obtainHTML} />
  )
};

export const Main = Template.bind({});

Main.args = {};
