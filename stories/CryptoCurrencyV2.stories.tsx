import React from "react";
import CryptoCurrencyV2, {CryptoCurrencyV2Props} from "../components/CryptoCurrencyV2";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/CryptoCurrencyV2",
  component: CryptoCurrencyV2,
  argTypes: {},
} as ComponentMeta<typeof CryptoCurrencyV2>;

const Template: ComponentStory<typeof CryptoCurrencyV2> = (
  args: CryptoCurrencyV2Props
) => <CryptoCurrencyV2 {...args} />;

export const Main = Template.bind({});
