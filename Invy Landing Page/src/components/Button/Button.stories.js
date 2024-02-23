import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    property1: {
      options: ["right-icon", "icon-only", "left-icon", "default"],
      control: { type: "select" },
    },
    size: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
    states: {
      options: ["active", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    hasIcon: true,
    label: "Button",
    property1: "right-icon",
    size: "desktop",
    states: "active",
    outlined: true,
    className: {},
    textClassName: {},
  },
};
