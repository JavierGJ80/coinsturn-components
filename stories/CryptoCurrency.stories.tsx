import React from "react";
import CryptoCurrency, {CryptoCurrencyProps} from "../components/CryptoCurrency";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/CryptoCurrency",
  component: CryptoCurrency,
  argTypes: {},
} as ComponentMeta<typeof CryptoCurrency>;

const Template: ComponentStory<typeof CryptoCurrency> = (
  args: CryptoCurrencyProps
) => <CryptoCurrency {...args} />;

export const Main = Template.bind({});
