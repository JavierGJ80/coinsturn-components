import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FileUploader } from "../components";
import { action } from "@storybook/addon-actions";

export default {
  title: "Example/MainPlugin",
  component: FileUploader,
  argTypes: {},
} as ComponentMeta<typeof FileUploader>;

const Template: ComponentStory<typeof FileUploader> = (args: any) => (
  <FileUploader {...args} />
);

export const Main = Template.bind({});

Main.args = {};
