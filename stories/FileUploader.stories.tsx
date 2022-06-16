import React from "react";
import { FileUploader } from "../components";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/FileUploader",
  component: FileUploader,
  argTypes: {},
} as ComponentMeta<typeof FileUploader>;

const Template: ComponentStory<typeof FileUploader> = (args: any) => (
  <div style={{ width: "100px", height: "100px" }}>
    <FileUploader {...args} />
  </div>
);

export const Main = Template.bind({});

Main.args = {
  endpoint: "",
  fileType: "IMAGE",
  updateValue: (data: any) => action(data)(data),
  imageSource: "",
  design: "SIMPLE",
};
