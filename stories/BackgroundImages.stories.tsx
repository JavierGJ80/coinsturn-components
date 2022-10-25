import React from "react";
import BackgroundImages, { BackgroundImagesProps } from "../components/BackgroundImages";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/BackgroundImages",
  component: BackgroundImages,
  argTypes: {},
} as ComponentMeta<typeof BackgroundImages>;

const Template: ComponentStory<typeof BackgroundImages> = (
  args: BackgroundImagesProps
) => <BackgroundImages {...args} />;

export const Main = Template.bind({});
 