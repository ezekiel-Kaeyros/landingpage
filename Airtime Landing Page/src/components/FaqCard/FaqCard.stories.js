import { FaqCard } from ".";

export default {
  title: "Components/FaqCard",
  component: FaqCard,
  argTypes: {
    property1: {
      options: ["dropped", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    question: "What countries can I send airtime to?",
    answer: "In all countries in the world ......",
    number: "01",
    property1: "dropped",
    className: {},
    numberClassName: {},
    textContainerClassName: {},
    headingClassName: {},
    paragraphClassName: {},
    headingClassNameOverride: {},
    button: "/img/button-16.svg",
  },
};
