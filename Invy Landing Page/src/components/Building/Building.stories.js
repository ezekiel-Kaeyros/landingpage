import { Building } from ".";

export default {
  title: "Components/Building",
  component: Building,
  argTypes: {
    property1: {
      options: ["twotone", "broken", "outline", "bold", "linear", "bulk"],
      control: { type: "select" },
    },
    property2: {
      options: ["building-4"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "twotone",
    property2: "building-4",
    className: {},
    propertyBulk:
      "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-bulk--property-2-building-4@2x.png",
  },
};
