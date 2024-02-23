import { Menu } from ".";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    property1: {
      options: ["twotone", "broken", "outline", "bold", "linear", "bulk"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "twotone",
    className: {},
    propertyLinear:
      "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-linear-7@2x.png",
  },
};
