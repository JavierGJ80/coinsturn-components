import React from "react";
import CryptoCurrency from "../components/CryptoCurrency";

export default {
  title: "Components/CryptoCurrency",
  component: CryptoCurrency,
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

const Template = (args) => <CryptoCurrency {...args} />;

export const Primary = Template.bind({});
