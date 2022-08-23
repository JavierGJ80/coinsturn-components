import React from "react";
import RatingStars, { RatingStarsProps } from "../components/RatingStars";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/RatingStars",
  component: RatingStars,
  argTypes: {},
} as ComponentMeta<typeof RatingStars>;

const Template: ComponentStory<typeof RatingStars> = (
  args: RatingStarsProps
) => <RatingStars {...args} />;

export const Main = Template.bind({});
 