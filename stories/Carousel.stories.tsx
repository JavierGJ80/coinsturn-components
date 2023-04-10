import React from "react";
import Carousel, { CarouselProps } from "../components/Carousel";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/CarouselMeter",
  component: Carousel,
  argTypes: {},
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (
  args: CarouselProps
) => <Carousel {...args} />;

export const Main = Template.bind({});
 