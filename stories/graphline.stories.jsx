import React from "react";
import Graphline from "../components/Graphline";

export default {
  title: "Components/graph",
  component: Graphline,
  argTypes: {
    asset: {
      control: "text",
    },
    timeSet: {
      control: "text",
    },
    borderColor: {
      control: "color",
    },
  },
};

const Template = (args) => <Graphline {...args} />;

export const Primary = Template.bind({});
