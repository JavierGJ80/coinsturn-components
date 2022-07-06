import React from "react";
import { WYSIWYG } from "../components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/WYSIWYG",
  component: WYSIWYG,
  argTypes: {},
} as ComponentMeta<typeof WYSIWYG>;

type refType = {
  handleSave: any;
}

const Template: ComponentStory<typeof WYSIWYG> = (args: any) => {
  const childCompRef = React.useRef<refType>();
  const obtainHTML = value => console.log(value);
  React.useEffect(() => {
    setTimeout(() => {
      childCompRef.current?.handleSave();
    }, 5000);
  }, []);
  return (
    <WYSIWYG {...args} ref={childCompRef} valueSaved={'<p><span style="color: rgb(0,0,0);font-size: 32px;font-family: Times;">asdsdasdssda</span></p>'} obtainHTML={obtainHTML} />
  )
};

export const Main = Template.bind({});

Main.args = {};
