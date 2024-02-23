import { Add } from ".";

export default {
  title: "Components/Add",
  component: Add,
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
    propertyBulk:
      "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/add-9@2x.png",
  },
};
