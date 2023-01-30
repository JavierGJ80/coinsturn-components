import React from "react";
import UploadPdf, { UploadPdfProps } from "../components/UploadPdf";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/UploadPdf",
  component: UploadPdf,
  argTypes: {},
} as ComponentMeta<typeof UploadPdf>;

const Template: ComponentStory<typeof UploadPdf> = (
  args: UploadPdfProps
) => <UploadPdf {...args} />;

export const Main = Template.bind({});
 