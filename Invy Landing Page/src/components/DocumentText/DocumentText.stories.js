import { DocumentText } from ".";

export default {
  title: "Components/DocumentText",
  component: DocumentText,
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
      "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-bulk-3@2x.png",
  },
};
