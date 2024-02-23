import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    property1: {
      options: [
        "btn-right-icon",
        "default",
        "btn-disable",
        "btn-icon-outline",
        "btn-hover",
        "btn-left-icon",
        "btn-light",
        "btn-outline",
        "btn-mobile",
        "btn-icon-only",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    hasRightIcon: true,
    button: "Button",
    hasLeftIcon: true,
    property1: "btn-right-icon",
    className: {},
    divClassName: {},
    divClassNameOverride: {},
  },
};
