import React from "react";
import FormTemplate, { FormTemplateProps } from "../components/FormTemplate";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Form",
  component: FormTemplate,
  argTypes: {},
} as ComponentMeta<typeof FormTemplate>;

const Template: ComponentStory<typeof FormTemplate> = (
  args: FormTemplateProps
) => <FormTemplate {...args} />;

export const Main = Template.bind({});
 