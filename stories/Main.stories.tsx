import React from "react";
import { MainComp } from "../components";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/MainComp",
  component: MainComp,
  argTypes: {},
} as ComponentMeta<typeof MainComp>;

const Template: ComponentStory<typeof MainComp> = (args: any) => (
  <MainComp {...args} />
);

export const Main = Template.bind({});

Main.args = {};
