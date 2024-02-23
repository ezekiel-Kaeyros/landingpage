import { TestimonyCard } from ".";

export default {
  title: "Components/TestimonyCard",
  component: TestimonyCard,
  argTypes: {
    property1: {
      options: ["variant-2", "light", "mobile", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    role: "PDG of Oschuna",
    nameOfTestimoner: "Mme Christine Mbong",
    testimony:
      "“I have been extremely happy with the results of working with Invy, and I would highly recommend them to anyone who is looking for a high-quality tool.”",
    property1: "variant-2",
    className: {},
    imgClassName: {},
    img: "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/--2@2x.png",
    imageClassName: {},
    image:
      "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/image-2@2x.png",
    img1: "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/--3@2x.png",
    containerClassName: {},
    textClassName: {},
    tittleClassName: {},
    image1:
      "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/image@2x.png",
    img2: "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/--1@2x.png",
    img3: "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/-@2x.png",
  },
};
