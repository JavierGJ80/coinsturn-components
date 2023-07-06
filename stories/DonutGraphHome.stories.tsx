import React from "react";
// import HomeDonut, { HomeDonutProps } from "../components/DonutGraphHome";
import HomeDonut from "../components/DonutGraphHome";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/HomeDonut",
  component: HomeDonut,
  argTypes: {},
} as ComponentMeta<typeof HomeDonut>;

const Template: ComponentStory<typeof HomeDonut> = (
  args: any
) => <HomeDonut {...args} />;

export const Main = Template.bind({});
Main.args = {
  data: [
      {
        "symbol": "USDT",
        "contracts_aggregate": {
          "aggregate": {
            "sum": {
              "current_value": 64785.4
            }
          }
        }
      },
      {
        "symbol": "ETH",
        "contracts_aggregate": {
          "aggregate": {
            "sum": {
              "current_value": 4642.44
            }
          }
        }
      },
      {
        "symbol": "BTC",
        "contracts_aggregate": {
          "aggregate": {
            "sum": {
              "current_value": 886411.87
            }
          }
        }
      },
      {
        "symbol": "BTC/BUSD",
        "contracts_aggregate": {
          "aggregate": {
            "sum": {
              "current_value": 51000
            }
          }
        }
      },
      {
        "symbol": "COVER",
        "contracts_aggregate": {
          "aggregate": {
            "sum": {
              "current_value": 827.77
            }
          }
        }
      }
    ]
}