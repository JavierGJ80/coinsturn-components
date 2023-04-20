import React from "react";
import LineGraph, { LineGraphProps } from "../components/LineGraph";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/LineGraph",
  component: LineGraph,
  argTypes: {},
} as ComponentMeta<typeof LineGraph>;

const data = [
  {
    date: '2022-01-01',
    profitLoss: -200,
    tradeNumber: 1,
    symbol: 'AAPL',
  },
  {
    date: '2022-01-02',
    profitLoss: -100,
    tradeNumber: 2,
    symbol: 'AAPL',
  },
  {
    date: '2022-01-03',
    profitLoss: 750,
    tradeNumber: 3,
    symbol: 'AAPL',
  },
  {
    date: '2022-01-04',
    profitLoss: -25,
    tradeNumber: 4,
    symbol: 'AAPL',
  },
  {
    date: '2022-01-04',
    profitLoss: 25,
    tradeNumber: 5,
    symbol: 'AAPL',
  },
  {
    date: '2022-01-04',
    profitLoss: -40,
    tradeNumber: 6,
    symbol: 'AAPL',
  },
  {
    date: '2022-01-04',
    profitLoss: 340,
    tradeNumber: 7,
    symbol: 'AAPL',
  },
];

const Template: ComponentStory<typeof LineGraph> = (
  args: LineGraphProps
) => <LineGraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: data,
};

