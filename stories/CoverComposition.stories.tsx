import React from "react";
import CoverComposition, { CoverCompositionProps } from "../components/CoverComposition";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/CoverComposition",
  component: CoverComposition,
  argTypes: {},
} as ComponentMeta<typeof CoverComposition>;

const Template: ComponentStory<typeof CoverComposition> = (
  args: CoverCompositionProps
) => <CoverComposition {...args} />;

export const Main = Template.bind({});
 